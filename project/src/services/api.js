import axios from 'axios';

const BACKEND_URL = 'https://v6.exchangerate-api.com/v6/f3701845f107ca41b56eaee4/';
const REQUEST_TIMEOUT = 5000;

const createAPI = (onUnauthorized) => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  const onSuccess = (response) => {
    return response;
  };

  const onFail = (err) => {
    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

export {createAPI};
