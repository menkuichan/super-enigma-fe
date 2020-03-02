import axios from 'axios';
import queryString from 'query-string';
import { API_URL } from '../constants';

export const axiosInstance = axios.create({
  baseURL: API_URL,
  paramsSerializer: (params) => queryString.stringify(params),
});

axiosInstance.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error),
);
