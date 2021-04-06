function Bookmark(chromeBookmark) {
  const {
    dateAdded,
    id,
    index,
    parentId,
    title,
    url,
  } = chromeBookmark;

  function getRaw() {
    return { dateAdded, id, index, parentId, title, url };
  }

  const instance = Object.assign(Object.create(Bookmark.prototype), {
    getRaw,
  });

  return instance;
}

export default Bookmark;
