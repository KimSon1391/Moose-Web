import axios from 'axios';
import queryString from 'query-string';
import apiConfig from './apiConfig';

const axiosClient = axios.create({
  baseURL: apiConfig.baseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
  paramsSerializer: (params) =>
    queryString.stringify({ ...params, api_key: apiConfig.api_key }),
});

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response) {
    if (response && response.data) {
      return response.data;
    }

    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axiosClient;
