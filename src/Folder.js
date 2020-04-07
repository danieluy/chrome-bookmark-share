import Bookmark from './Bookmark';
import api from './api';

function Folder(data) {

  if (!Folder.isFolder(data)) {
    throw new Error('Missing argument data.dateGroupModified');
  }

  this.dateAdded = new Date(data.dateAdded);
  this.dateGroupModified = new Date(data.dateGroupModified);
  this.id = data.id;
  this.index = data.index;
  this.parentId = data.parentId;
  this.title = data.title;

  this.children = [];
  this.meta = {
    listening: false,
    updating: false,
    ...Folder.DEFAULT_CONFIG,
  };
}

Folder.BOOKMARK_BAR_ID = '1';

Folder.DEFAULT_CONFIG = {
  syncURL: null,
  backup: {
    enabled: true,
    length: 3,
  },
};

Folder.init = async function ({
  title,
  parentId = Folder.BOOKMARK_BAR_ID,
  syncURL,
  onAuth,
  onError = () => 0,
}) {
  // Options check
  if (!title) throw new Error('Missing title.');
  if (!syncURL) throw new Error('Missing syncURL.');
  if (!onAuth) throw new Error('Missing onAuth callback.');
  // Search root folder on Chrome
  let [folder] = await Folder.find(title, parentId);
  if (folder) {
    // Load root folder's children from Chrome
    // Update local data
    await folder.fromChrome();
    folder.meta.root = true;
  }
  else {
    // Create root folder on Chrome
    folder = await Folder.createRoot(title, parentId);
  }
  // Config meta
  folder.meta.syncURL = syncURL;
  folder.meta.onAuth = onAuth;
  folder.meta.onError = onError;

  // Init listeners to capture changes on Chrome
  folder.startListeners();
  // Initial data sync
  const res = await folder.sync();

  return {
    folder,
    syncResult: res,
  };
};

/**
 * @param {any} candidate
 * @returns {boolean}
 */
Folder.isFolder = function (candidate) {
  return !!candidate.dateGroupModified;
};

/**
 * Find all folders that match a given title
 * and optionally a given parent.
 * @param {string} title
 * @param {string} parentId?
 * @returns {Folder[]}
 */
Folder.find = function (title, parentId) {
  return new Promise((resolve, reject) => {
    try {
      chrome.bookmarks.search({ title }, results => {
        if (parentId) {
          resolve(results
            .filter(res => res.parentId === parentId && Folder.isFolder(res))
            .map(res => new Folder(res)));
          return;
        }
        resolve(results
          .filter(res => !!Folder.isFolder(res))
          .map(res => new Folder(res))
        );
      });
    }
    catch (err) {
      reject(err);
    }
  });
};

/**
 * Creates a folder in Chrome.
 * @param {string} title
 * @param {string} parentId
 * @returns {Folder}
 */
Folder.create = function (title, parentId) {
  return new Promise((resolve, reject) => {
    try {
      chrome.bookmarks.create({ title, parentId }, result => {
        const folder = new Folder(result);
        resolve(folder);
      });
    }
    catch (err) {
      reject(err);
    }
  });
};

/**
 * Creates a folder in Chrome and sets it internally as root.
 * Sets local version of the Folder.
 * @param {string} title
 * @param {string} parentId
 * @returns {Folder}
 */
Folder.createRoot = function (title, parentId) {
  return new Promise(async (resolve, reject) => {
    try {
      const folder = await Folder.create(title, parentId);
      folder.meta.root = true;
      folder.local = folder.raw;
      resolve(folder);
    }
    catch (err) {
      reject(err);
    }
  });
};

/**
 * Recursively instatiate Folder and Bookmarks from raw server data.
 * @param {{}} data
 */
Folder.parse = function (data) {
  const { children, ...raw } = data;
  const folder = new Folder(raw);
  folder.children = children.map(item => {
    if (Folder.isFolder(item)) {
      return Folder.parse(item);
    }
    return Bookmark.parse(item);
  });
  return folder;
};

Folder.backup = function (folder) {
  if (!(folder instanceof Folder)) {
    throw new TypeError(`Cannot backup type ${typeof folder}. Expected Folder.`);
  }
  try {
    const body = {
      folder: folder.raw,
      edited: {
        date: new Date(),
        user: '',
      },
    };
    window.localStorage.setItem(`BACKUP_${folder.key}`, JSON.stringify(body));
  }
  catch (err) {
    this.errorHandler(err);
  }
};

/**
 * Cast classes to plain objects and remove meta.
 * @returns {{}}
 */
Object.defineProperty(Folder.prototype, 'raw', {
  get: function () {
    /**
     * #####       ####
     *   #    ###  #   #  ###
     *   #   #   # #   # #   #
     *   #   #   # #   # #   #
     *   #    ###  ####   ###
     *
     * ToDo: maybe optimize
     */
    const raw = JSON.parse(JSON.stringify(this));
    delete raw.meta;
    return raw;
  }
});

/**
 * Cast classes to plain objects and remove meta.
 * @returns {string}
 */
Object.defineProperty(Folder.prototype, 'key', {
  get: function () {
    return `BOOKMARK_${this.title.replace(/\s/g, '_').toUpperCase()}`;
  },
});

Folder.prototype.getLocal = function () {
  try {
    const stored = window.localStorage.getItem(this.key);
    if (stored) {
      return JSON.parse(stored);
    }
    return null;
  }
  catch (err) {
    this.errorHandler(err);
    return null;
  }
};

/**
 * Stores local data
 * @param {{}} rawFolder
 * @param {Date} date?
 */
Folder.prototype.setLocal = function (rawFolder, date) {
  if (!(rawFolder instanceof Object)) {
    throw new TypeError(`Cannot store type ${typeof rawFolder}. Expected object.`);
  }
  if (!this.meta.root) {
    // Only root folder should be stored
    return;
  }
  try {
    const body = {
      folder: rawFolder,
      edited: {
        date: date || new Date(),
        user: '',
      },
    };
    window.localStorage.setItem(this.key, JSON.stringify(body));
  }
  catch (err) {
    this.errorHandler(err);
  }
};

/**
 * Unifies error handling
 */
Folder.prototype.errorHandler = function (error) {
  /**
   * #####       ####
   *   #    ###  #   #  ###
   *   #   #   # #   # #   #
   *   #   #   # #   # #   #
   *   #    ###  ####   ###
   *
   * ToDo: maybe return a standardized error
   */
  this.onError(error);
};

/**
 * Synchronize server and local folder to last modified.
 */
Folder.prototype.sync = function () {
  // Request data from server
  return api.pull(this.meta.syncURL, this)
    .then(serverData => {
      // Request local data
      const localData = this.getLocal();
      if (localData && serverData) {
        // Common case
        const localFolder = Folder.parse(localData.folder);
        const serverFolder = Folder.parse(serverData.folder);
        // Check equality
        if (!localFolder.equal(serverFolder)) {
          // Compare dates
          const localDate = new Date(localData.edited.date);
          const serverDate = new Date(serverData.edited.date);
          if (localDate > serverDate) {
            return api.push(this.meta.syncURL, this.raw);
          }
          if (localDate < serverDate) {
            return this.update(serverData.folder, serverDate);
          }
        }
      }
      else if (localData && !serverData) {
        // No server data, first use for a given syncURL
        return api.push(this.meta.syncURL, this.raw);
      }
      else if (!localData && serverData) {
        // No local data, installation on browser or reset
        const serverDate = new Date(serverData.edited.date);
        return this.update(serverData.folder, serverDate);
      }
      return Promise.resolve('SYNC_SUCCESS_NO_CHANGES');
    })
    .then(res => {
      if (res === 'SUCCESS_FOLDER_UPDATE') {
        return Promise.resolve('SYNC_SUCCESS_SERVER_PULL');
      }
      if (res === 'SUCCESS_API_PUSH') {
        return Promise.resolve('SYNC_SUCCESS_SERVER_PUSH');
      }
      return Promise.resolve(res);
    })
    .catch(error => {
      this.errorHandler(error);
    });
};

/**
 * Compares relevant info form folders
 * @param {Folder} other
 * @returns {boolean}
 */
Folder.prototype.equal = function (other) {
  if (this.title !== other.title) {
    return false;
  }
  if (this.children.length !== other.children.length) {
    return false;
  }
  let res = true;
  for (let i = 0; i < this.children.length; i++) {
    const child = this.children[i];
    const otherChild = other.children[i];
    if (child instanceof Object.getPrototypeOf(otherChild).constructor) {
      res = res && child.equal(otherChild);
    }
    else {
      return false;
    }
  }
  return res;
};

/**
 * Update folder's properties with raw data and pushes to Chrome.
 * Sets local version of the Folder.
 * @param {{}} raw
 * @param {Date} date
 */
Folder.prototype.update = function (raw, date) {
  return this.remove()
    .then(() => {
      const folder = Folder.parse(raw);
      this.children = folder.children;
      this.meta.updating = true;
      return this.toChrome(this.parentId);
    })
    .then(() => {
      this.setLocal(this.raw, date);
      this.meta.updating = false;
      return 'SUCCESS_FOLDER_UPDATE';
    });
};

/**
 * Remove a folder's children from Chrome.
 * @returns {Promise}
 */
Folder.prototype.removeChildren = function () {
  const deleteChildren = this.children.map(child => child.remove());
  return Promise.all(deleteChildren);
};

/**
 * Recursively fill folder's children from Chrome.
 * Update local data.
 * @returns {Folder}
 */
Folder.prototype.fromChrome = function () {
  // Shallow search for children in Chrome
  return this.getChildren()
    .then(children => {
      const { bookmarks, subFolders } = classify(children);
      this.children = [];
      if (bookmarks.length) {
        this.children = this.children.concat(bookmarks);
      }
      if (subFolders.length) {
        // Recursive promise for child folders
        const subFoldersFromChrome = subFolders.map(subFolder => subFolder.fromChrome());
        return Promise.all(subFoldersFromChrome);
      }
      return Promise.resolve(null);
    })
    .then(readySubFolders => {
      if (readySubFolders) {
        this.children = this.children.concat(readySubFolders);
      }
      this.setLocal(this.raw);
      return this;
    });
};

/**
 * Create on Chrome and update instance.
 * Recursively do the same for the children.
 * Note: chrome.bookmarks events won't be fired
 * @param {string} parentId
 * @returns {Promise}
 */
Folder.prototype.toChrome = function (parentId) {
  /**
   * #####       ####
   *   #    ###  #   #  ###
   *   #   #   # #   # #   #
   *   #   #   # #   # #   #
   *   #    ###  ####   ###
   *
   * ToDo: remove event listeners and set them again when finish
   */
  return Folder.create(this.title, parentId, this.meta.root)
    .then(readyFolder => {
      this.id = readyFolder.id;
      this.parentId = readyFolder.parentId;
      this.dateAdded = readyFolder.dateAdded;
      this.dateGroupModified = readyFolder.dateGroupModified;
      this.index = readyFolder.index;
      this.title = readyFolder.title;
      if (this.children.length) {
        const childrenToChrome = this.children.map(item => item.toChrome(this.id));
        return Promise.all(childrenToChrome);
      }
      return Promise.resolve();
    });
};

/**
 * Remove a folder from Chrome.
 */
Folder.prototype.remove = function () {
  return new Promise((resolve, reject) => {
    try {
      chrome.bookmarks.removeTree(this.id, () => resolve());
    }
    catch (err) {
      reject(err);
    }
  });
};

/**
 * Get folder's direct children from Chrome.
 * Intiantiate a Folder or Bookmar for each child.
 */
Folder.prototype.getChildren = function () {
  return new Promise((resolve, reject) => {
    try {
      chrome.bookmarks.getChildren(this.id, children => {
        if (children) {
          resolve(children.map(child => {
            if (Folder.isFolder(child)) {
              return new Folder(child);
            }
            return new Bookmark(child);
          }));
        }
        else {
          resolve([]);
        }
      });
    }
    catch (err) {
      reject(err);
    }
  });
};

/**
 * Start listeners for events fired by Chrome.
 * Immediately push changes to server.
 */
Folder.prototype.startListeners = function () {
  if (!this.meta.listening) {
    chrome.bookmarks.onCreated.addListener(this._handleEvent.bind(this, 'onCreated'));
    chrome.bookmarks.onRemoved.addListener(this._handleEvent.bind(this, 'onRemoved'));
    chrome.bookmarks.onChanged.addListener(this._handleEvent.bind(this, 'onChanged'));
    chrome.bookmarks.onMoved.addListener(this._handleEvent.bind(this, 'onMoved'));
    chrome.bookmarks.onChildrenReordered.addListener(this._handleEvent.bind(this, 'onChildrenReordered'));
    this.meta.listening = true;
  }
};

/**
 * Hooks to Chrome bookmarks events.
 * Takes data from Chrome
 * @param {String} eventName
 * @returns {Promise<Folder>}
 */
Folder.prototype._handleEvent = function (eventName) {
  if (this.meta.updating) return;

  this.fromChrome()
    .then(() => api.push(this.meta.syncURL, this.raw))
    .then(result => console.log({
      eventName,
      result,
    }))
    .catch(this.errorHandler);
};

export default Folder;

/**
 * Separates plain objects as folders or bookmarks
 * @param {Array<Object>} items 
 * @returns {{ bookmarks: [], subFolders: [] }}
 */
function classify(items) {
  return items.reduce((classified, item) => {
    if (Folder.isFolder(item)) {
      classified.subFolders.push(item);
    }
    else {
      classified.bookmarks.push(item);
    }
    return classified;
  }, { bookmarks: [], subFolders: [] });
}
