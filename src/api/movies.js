import { axiosInstance } from './config';

export default {
  get(params) {
    return axiosInstance.get(`/movies/?${params}`);
  },

  getById(id) {
    return axiosInstance.get(`/movies/${id}`);
  },
};
