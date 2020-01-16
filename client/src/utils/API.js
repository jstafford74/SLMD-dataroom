import axios from "axios";

import { getJwt } from './Authentication';

const axiosP = axios.create({
  baseURL: '/api/protected'
});

axiosP.interceptors.request.use(function (config) {
  // Do something before request is sent
  config.headers = {
    ...config.headers,
    ...getAuthHeader()
  }
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

export default {

  signup: function (newUser) {
    return axios.post("/api/auth/signup", newUser).then(res => res.data);
  },

  login: function (credentials) {
    return axios.post("/api/auth/login", credentials).then(res => res.data);
  },
};

function getAuthHeader() {
  const jwt = getJwt();
  return jwt ? { Authorization: 'Bearer ' + jwt } : undefined
}