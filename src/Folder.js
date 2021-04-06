import Bookmark from './Bookmark';

function Folder(chromeFolder) {
  if (!Folder.isFolder(chromeFolder)) {
    throw new Error('Missing argument: dateGroupModified');
  }

  const {
    id,
    dateAdded,
    dateGroupModified,
    index,
    parentId,
    title,
  } = chromeFolder;

  let children = [];

  const meta = {
    listening: false,
    updating: false,
    syncURL: null,
    backup: {
      enabled: true,
      length: 3,
    },
  };

  function getRaw() {
    return {
      dateAdded,
      id,
      index,
      parentId,
      title,
      dateGroupModified,
      children: children.map(child => child.getRaw()),
    };
  }

  function getChildren() {
    return children;
  }

  function setAsRoot() {
    meta.root = true;
  }

  async function setChildren(chromeChildren) {
    children = await recursiveSetChildren(chromeChildren);
  }

  const instance = Object.assign(Object.create(Folder.prototype), {
    getRaw,
    getChildren,
    setChildren,
    setAsRoot,
  });

  Object.defineProperty(instance, 'meta', {
    get: () => ({
      ...meta,
      backup: { ...meta.backup },
    }),
    set: () => {
      throw new Error('meta is read only');
    }
  });

  return instance;
}

Folder.BOOKMARK_BAR_ID = '1';

Folder.find = (title, parentId) => new Promise((resolve, reject) => {
  try {
    chrome.bookmarks.search({ title }, results => {
      if (parentId) {
        resolve(results.filter(res => res.parentId === parentId && Folder.isFolder(res)));
        return;
      }
      resolve(results.filter(res => !!Folder.isFolder(res)));
    });
  }
  catch (err) {
    reject(err);
  }
});

Folder.getChildrenFromChrome = folderId => new Promise((resolve, reject) => {
  try {
    chrome.bookmarks.getChildren(folderId, children => {
      if (children) {
        resolve(children);
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

Folder.create = (title, parentId) => new Promise((resolve, reject) => {
  try {
    chrome.bookmarks.create({ title, parentId }, result => {
      // If !parentId folder will end up on Other Bookmarks
      const folder = new Folder(result);
      resolve(folder);
    });
  }
  catch (err) {
    reject(err);
  }
});

/**
 * @param {any} candidate
 * @returns {boolean}
 */
Folder.isFolder = function (candidate) {
  return !!candidate.dateGroupModified;
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

async function recursiveSetChildren(chromeChildren) {
  let children = [];
  const { bookmarks: chromeBookmarks, subFolders: chromeFolders } = classify(chromeChildren);
  if (chromeBookmarks.length) {
    // Add bookmarks to children list
    children = children.concat(chromeBookmarks.map(bookmark => new Bookmark(bookmark)));
  }
  if (chromeFolders.length) {
    // Instantiate Folders
    const folders = chromeFolders.map(chromeFolder => new Folder(chromeFolder));
    // Get folders children
    const subChildrenFromChrome = await Promise.all(chromeFolders.map(folder => Folder.getChildrenFromChrome(folder.id)));
    // Set children in folders
    await Promise.all(folders.map((folder, i) => folder.setChildren(subChildrenFromChrome[i])));
    // Add folders to children list
    children = children.concat(folders);
  }
  return children;
}