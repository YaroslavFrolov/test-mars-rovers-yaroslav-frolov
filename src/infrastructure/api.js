const API_ROOT = process.env.REACT_APP_API_ROOT;
const API_KEY = process.env.REACT_APP_API_KEY;



function makeURL(endpoint, params) {
  const addr = new URL(`${API_ROOT}/${endpoint}`);

  if (params) {
    for (let [key, value] of Object.entries(params)) {
      addr.searchParams.set(key, value);
    }
  }

  addr.searchParams.set('api_key', API_KEY);

  return addr.href;
}



function GET(...args) {
  const url = makeURL(...args);

  return fetch(url, {
    method: 'GET',
  })
  .then(handleError)
};



function handleError(res) {
  if(!res.ok){
    return Promise.reject(res);
  }

  return res.json();
};



export const apiGetRoverInfo = roverName => {
  return GET(`manifests/${roverName}`);
};

export const apiGetPhotos = (roverName, params) => {
  return GET(`rovers/${roverName}/photos`, params);
};
