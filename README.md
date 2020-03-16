# Bookmarks Share

## Usage
```javascript
import { Folder } from 'chrome-bookmark-share';

// Search root folder on Chrome
const result = await Folder.search('FOLDER_NAME', '1');
let folder = result[0];
if (folder) {
  // Load root folder's children from Chrome
  // Update local data
  await folder.fromChrome();
  folder.meta.root = true;
}
else {
  // Create root folder on Chrome
  // 3rd argument sets folder as root 
  folder = await Folder.create('FOLDER_NAME', '1', true);
}

// Config root folder
folder.config({
  sync: {
    enabled: true,
    url: 'localhost:3000',
    auto: true,
  },
});
```

## Create a link for local development
```bash
# On this module root directory
$ npm link
# On the root of the folder that will import this package
$ npm link chrome-bookmark-share
```
