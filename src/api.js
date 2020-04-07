const BOOKMARK_SYNC_AUTH_TOKEN = 'BOOKMARK_SYNC_AUTH_TOKEN';

/**
 * Get raw folder from server
 * @param {string} url
 * @param {{}} folder
 * @returns {Promise<{}>}
 */
function pull(url, folder) {
  return new Promise(async (resolve, reject) => {
    try {
      const headers = { 'Content-Type': 'application/json' };
      const jwt = localStorage.getItem(BOOKMARK_SYNC_AUTH_TOKEN);
      if (jwt) {
        headers.Authorization = `Bearer ${jwt}`;
      }
      const response = await fetch(url, {
        method: 'GET',
        cache: 'no-cache',
        headers,
      });
      if (!response.ok) {
        handleResponseError(response, folder);
        return;
      }
      const data = await response.json();
      if (data) {
        return resolve(data);
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
 * @param {string} url
 * @param {{}} folder
 * @returns {Promise<string>}
 */
function push(url, folder) {
  return new Promise(async (resolve, reject) => {
    try {
      const headers = { 'Content-Type': 'application/json' };
      const jwt = localStorage.getItem(BOOKMARK_SYNC_AUTH_TOKEN);
      if (jwt) {
        headers.Authorization = `Bearer ${jwt}`;
      }
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
        headers,
        body: JSON.stringify(body),
      });
      if (response.ok) {
        resolve('SUCCESS_API_PUSH');
      }
      else {
        handleResponseError(response, folder);
      }
    }
    catch (err) {
      reject(err);
    }
  });
}

/**
 * Login
 * @param {string} url
 * @param {string} userName
 * @param {string} password
 * @returns {Promise}
 */
function auth(url, userName, password) {
  return new Promise(async (resolve, reject) => {
    try {
      const body = {
        userName,
        password,
      };
      const response = await fetch(`${url}/login`, {
        method: 'POST',
        cache: 'no-cache',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
      if (response.ok) {
        const _jwt = await response.json();
        localStorage.setItem(BOOKMARK_SYNC_AUTH_TOKEN, _jwt.jwt);
        resolve('SUCCESS_API_AUTH');
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

function handleResponseError(response, folder) {
  if (response.status === 401) {
    folder.meta.onAuth((userName, password) => auth(folder.meta.syncURL, userName, password));
  }
  else {
    throw Error(response.statusText);
  }
}

export default {
  pull,
  push,
};
