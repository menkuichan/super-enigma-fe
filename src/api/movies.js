import { axiosInstance } from './config';

export default {
  get(params) {
    return axiosInstance.get('/movies', {
      params,
    });
  },
};
