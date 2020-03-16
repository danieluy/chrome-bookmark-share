function Bookmark(data) {
  this.dateAdded = new Date(data.dateAdded);
  this.id = data.id;
  this.index = data.index;
  this.parentId = data.parentId;
  this.title = data.title;
  this.url = data.url;
}

/**
 * Instatiate a Bookmark from raw server data
 * Currently this can be achieved by returning a new Bookmark
 * @param {{}}
 */
Bookmark.parse = function (raw) {
  return new Bookmark(raw);
};

/**
 * Creates a bookmark in the browser
 * @param {string} title
 * @param {string} parentId
 * @param {string} url
 * @returns {Bookmark}
 */
Bookmark.create = function (title, parentId, url) {
  return new Promise((resolve, reject) => {
    try {
      chrome.bookmarks.create({ title, parentId, url }, result => {
        resolve(new Bookmark(result));
      });
    }
    catch (err) {
      reject(err);
    }
  });
};

/**
 * Remove a bookmark from Chrome
 */
Bookmark.prototype.remove = function () {
  return new Promise((resolve, reject) => {
    try {
      chrome.bookmarks.remove(this.id, () => resolve());
    }
    catch (err) {
      reject(err);
    }
  });
};

/**
 * Create a bookmark on Chrome
 * Update the current instances ids with the created ones
 * @param {string} parentId
 */
Bookmark.prototype.toChrome = async function (parentId) {
  const readyBookmark = await Bookmark.create(this.title, parentId, this.url);
  this.dateAdded = readyBookmark.dateAdded;
  this.parentId = parentId;
  this.id = readyBookmark.id;
  this.index = readyBookmark.index;
};

/**
 * Compares relevant info form bookmarks
 * @param {Bookmark} other
 * @returns {boolean}
 */
Bookmark.prototype.equal = function (other) {
  if (this.title !== other.title) {
    return false;
  }
  if (this.url !== other.url) {
    return false;
  }
  return true;
};

export default Bookmark;
