import Bookmark from './Bookmark';
import api from './api';
const CONTROL_TOKEN = Math.random();

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
    ...Folder.DEFAULT_CONFIG,
  };
}

Folder.DEFAULT_CONFIG = {
  sync: {
    enabled: false,
    url: null,
    auto: false,
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
 * @param {{}}
 */
Folder.parse = function ({ children, ...raw }) {
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
 * @returns {{}}
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
  // eslint-disable-next-line getter-return
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
  if (this.meta.sync.auto) {
    this._startListeners(CONTROL_TOKEN);
  }
};

/**
 * Synchronize server and local folder to last modified.
 */
Folder.prototype.sync = async function () {
  if (!this.meta.sync.enabled) throw new Error('Sync is disabled for this folder.');
  if (!this.meta.sync.url) throw new Error('Missing sync URL.');
  try {
    const serverData = await api.pull(this.meta.sync.url);
    const localData = this.local;
    const isDataOutdated = new Date(localData.edited.date) < new Date(serverData.edited.date);
    if (isDataOutdated) {
      await this.update(serverData.folder);
      return 'SYNC_UPDATE_OK';
    }
    await api.push(this.meta.sync.url, this.raw);
    return 'SYNC_PUSH_OK';
  }
  catch (err) {
    handleErrorPlaceholder(err);
  }
};

/**
 * Update folder's properties with data from server.
 * Note: updates dateGroupModified.
 * @param {{}} raw
 */
Folder.prototype.update = async function (raw) {
  await this.remove();
  const folder = Folder.parse(raw);
  this.children = folder.children;
  await this.toChrome(this.parentId);
  this.local = this.raw;
};

/**
 * Update folder from Chrome.
 * Push changes to server.
 * @returns {Promise}
 */
Folder.prototype.push = async function () {
  await this.fromChrome();
  return this.sync();
};

/**
 * Remove a folder's children from Chrome.
 */
Folder.prototype.removeChildren = async function () {
  const deleteChildren = this.children.map(child => child.remove());
  return Promise.all(deleteChildren);
};

/**
 * Recursively fill folder's children from Chrome.
 * Update local data.
 * @returns {Folder}
 */
Folder.prototype.fromChrome = async function () {
  // Shallow search for children in Chrome
  const children = await this.getChildren();
  const { bookmarks, subFolders } = classify(children);
  this.children = this.children.concat(bookmarks);
  // Recursive promise for child folders
  const subFoldersFromChrome = subFolders.map(subFolder => subFolder.fromChrome());
  const readySubFolders = await Promise.all(subFoldersFromChrome);
  this.children = this.children.concat(readySubFolders);
  // Update local version to use on Folder.prototype.sync
  this.local = this.raw;
  return this;
};

/**
 * Create on Chrome and update instance.
 * Recursively do the same for the children.
 * @param {string} parentId
 */
Folder.prototype.toChrome = async function (parentId) {

  const readyFolder = await Folder.create(this.title, parentId);
  this.id = readyFolder.id;
  this.parentId = readyFolder.parentId;
  this.dateAdded = readyFolder.dateAdded;
  this.dateGroupModified = readyFolder.dateGroupModified;
  this.index = readyFolder.index;
  this.title = readyFolder.title;

  const childrenToChrome = this.children.map(item => item.toChrome(this.id));
  await Promise.all(childrenToChrome);
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
        resolve(children.map(child => {
          if (Folder.isFolder(child)) {
            return new Folder(child);
          }
          return new Bookmark(child);
        }));
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
Folder.prototype._startListeners = function (_CONTROL_TOKEN) {
  if (CONTROL_TOKEN !== _CONTROL_TOKEN) {
    throw new Error('Illegal invocation. This method is private.');
  }
  chrome.bookmarks.onCreated.addListener(this.push.bind(this));
  chrome.bookmarks.onRemoved.addListener(this.push.bind(this));
  chrome.bookmarks.onChanged.addListener(this.push.bind(this));
  chrome.bookmarks.onMoved.addListener(this.push.bind(this));
  chrome.bookmarks.onChildrenReordered.addListener(this.push.bind(this));
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