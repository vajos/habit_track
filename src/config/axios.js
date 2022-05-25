/* istanbul ignore file */
import env from "./env";
import axios from "axios";
import store from "./redux";
import { resetUser } from "../user/userReducer";

const instance = axios.create({
  baseURL: env.API_ENDPOINT,
});

instance.interceptors.request.use(
  (config) => {
    config.headers = {
      ...config.headers,
      ...(store.getState().user.user && {
        Authorization: `Bearer ${store.getState().user.user.accessToken}`,
      }),
    };
    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  (error) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    store.dispatch(resetUser());
    return Promise.reject(error);
  }
);

export default instance;
