import axios from "axios";
import {ErrorTypes} from "./const";

const Error = {
  UNAUTHORIZED: 401
};

export const createAPI = (onUnauthorized, onNetworkError) => {
  const api = axios.create({
    baseURL: `https://4.react.pages.academy/six-cities`,
    timeout: 5000,
    withCredentials: true,
  });


  const onSussess = (response) => {
    return response;
  };

  const onFail = (err) => {
    const {response} = err;

    if (response) {
      if (response.status === ErrorTypes.BAD_REQUEST) {
        onNetworkError(ErrorTypes.BAD_REQUEST);
      }

      if (response.status === Error.UNAUTHORIZED) {
        onUnauthorized();
        throw err;
      }
      if (err.message === ErrorTypes.NETWORK) {
        onNetworkError(ErrorTypes.NETWORK);
      }
    }


    throw err;
  };
  api.interceptors.response.use(onSussess, onFail);

  return api;
};
