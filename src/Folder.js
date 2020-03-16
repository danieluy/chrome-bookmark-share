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
    ...Folder.DEFAULT_CONFIG,
  };
}

Folder.BOOKMARK_BAR_ID = '1';

Folder.DEFAULT_CONFIG = {
  sync: {
    enabled: false,
    url: null,
  },
  backup: {
    enabled: true,
    length: 3,
  },
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
Folder.search = function (title, parentId) {
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
Folder.create = function (title, parentId, isRoot) {
  return new Promise((resolve, reject) => {
    try {
      chrome.bookmarks.create({ title, parentId }, result => {
        const folder = new Folder(result);
        if (isRoot) {
          folder.meta.root = true;
          folder.local = folder.raw;
        }
        resolve(folder);
      });
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
    handleErrorPlaceholder(err);
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

/**
 * Store and retrieve state from localStorage.
 * Used on Folder.prototype.sync
 */
Object.defineProperty(Folder.prototype, 'local', {
  /**
   * Getter
   * @returns {{}} 
   */
  get() {
    try {
      const stored = window.localStorage.getItem(this.key);
      if (stored) {
        return JSON.parse(stored);
      }
      return null;
    }
    catch (err) {
      handleErrorPlaceholder(err);
      return null;
    }
  },
  /**
   * Setter
   * @param {{}} rawFolder
   */
  set(rawFolder) {
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
          date: new Date(),
          user: '',
        },
      };
      window.localStorage.setItem(this.key, JSON.stringify(body));
    }
    catch (err) {
      handleErrorPlaceholder(err);
    }
  },
});

/**
 * Set config options from partial options.
 * @param {{}} opt
 */
Folder.prototype.config = function (opt = {}) {
  if (opt.sync) {
    this.meta.sync = {
      ...this.meta.sync,
      ...opt.sync,
    };
  }
  if (opt.backup) {
    this.meta.backup = {
      ...this.meta.backup,
      ...opt.backup,
    };
  }
  if (opt.sync.enabled && !opt.onAuth) {
    throw new Error('Missing onAuth callback.');
  }
  else {
    this.meta.onAuth = opt.onAuth;
  }
  this.startListeners();
};

/**
 * Synchronize server and local folder to last modified.
 */
Folder.prototype.sync = function () {
  if (!this.meta.sync.enabled) throw new Error('Sync is disabled for this folder.');
  if (!this.meta.sync.url) throw new Error('Missing sync URL.');

  return api.pull(this.meta.sync.url, this)
    .then(serverData => {
      const localData = this.local;
      if (localData && !serverData) {
        return api.push(this.meta.sync.url, this.raw);
      }
      else if (!localData && serverData) {
        return this.update(serverData.folder);
      }
      else if (localData && serverData) {
        const localFolder = Folder.parse(localData.folder);
        const serverFolder = Folder.parse(serverData.folder);
        if (!localFolder.equal(serverFolder)) {
          const localDate = new Date(localData.edited.date);
          const serverDate = new Date(serverData.edited.date);
          if (localDate >= serverDate) {
            return api.push(this.meta.sync.url, this.raw);
          }
          return this.update(serverData.folder);
        }
      }
      return Promise.resolve('SUCCESS_NO_CHANGES');
    })
    .catch(handleErrorPlaceholder);
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
 * Update folder's properties with raw data.
 * @param {{}} raw
 */
Folder.prototype.update = function (raw) {
  return this.remove()
    .then(() => {
      const folder = Folder.parse(raw);
      this.children = folder.children;
      return this.toChrome(this.parentId);
    })
    .then(() => {
      this.local = this.raw;
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
      // Update local version to use on Folder.prototype.sync
      this.local = this.raw;
      return this;
    });
};

/**
 * Create on Chrome and update instance.
 * Recursively do the same for the children.
 * Note: chrome.bookmarks events will be fired
 *       as a result of this method being called
 * @param {string} parentId
 * @returns {Promise}
 */
Folder.prototype.toChrome = function (parentId) {
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
    })
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

Folder.prototype._handleEvent = function (eventName) {
  return this.fromChrome();
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

function handleErrorPlaceholder(error) {
  throw error;
}