
/**
 * Get raw folder from server
 * @returns {{}}
 */
function pull(url) {
  return new Promise(async (resolve, reject) => {
    try {
      // const data = window.localStorage.getItem('SAMPLE_BOOKMARK_DATA');
      const response = await fetch(url);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const data = await response.json();
      if (data) {
        return resolve(_ensureData(data));
      }
      resolve(null);
    }
    catch (err) {
      reject(err);
    }
  });
}

/**
 * Put raw folder on server
 * @param {{}} folder
 */
function push(url, folder) {
  return new Promise(async (resolve, reject) => {
    try {
      // window.localStorage.setItem('SAMPLE_BOOKMARK_DATA', JSON.stringify(body));
      const body = {
        folder,
        edited: {
          date: new Date(),
          user: '',
        },
      };
      const response = await fetch(url, {
        method: 'PUT',
        cache: 'no-cache',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
      if (response.ok) {
        resolve();
      }
      else {
        throw Error(response.statusText);
      }
    }
    catch (err) {
      reject(err);
    }
  });
}

/**
 * Makes sure returned data adheres to API transfer schema
 * @param {{}} serverData 
 */
function _ensureData(serverData) {
  if (!serverData || !serverData.edited || !serverData.edited.date) {
    // Ensure data with edited.date === ECMAScript's Epoch
    return { edited: { date: new Date(null) } };
  }
  return serverData;
}

export default {
  pull,
  push,
};
