import Folder from './Folder';

async function init({
  title,
  parentId = Folder.BOOKMARK_BAR_ID,
  syncURL,
  onAuth,
  onError = () => 0,
}) {
  try {
    // Options check
    if (!title) throw new Error('Missing title.');
    if (!syncURL) throw new Error('Missing syncURL.');
    if (!onAuth) throw new Error('Missing onAuth callback.');
    // Search root folder on Chrome
    const [chromeFolder] = await Folder.find(title, parentId);
    if (chromeFolder) {
      const folder = new Folder(chromeFolder);
      const children = await Folder.getChildrenFromChrome(chromeFolder.id);
      await folder.setChildren(children);
      folder.setAsRoot();
      return folder;
    }
    // Create root folder on Chrome
    const folder = await Folder.create(title, parentId);
    folder.setAsRoot();
    return folder;
  }
  catch (err) {
    onError(err);
  }
  // // Config meta
  // chromeFolder.meta.syncURL = syncURL;
  // chromeFolder.meta.onAuth = onAuth;
  // chromeFolder.meta.onError = onError;

  // // Init listeners to capture changes on Chrome
  // chromeFolder.startListeners();
  // // Initial data sync
  // const res = await chromeFolder.sync();

  // return {
  //   chromeFolder,
  //   syncResult: res,
  // };
}

export default {
  init,
};
