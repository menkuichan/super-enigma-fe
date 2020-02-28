import { axiosInstance } from './config';

export default {
  get() {
    return axiosInstance.get('/genres');
  },

  getById(id) {
    return axiosInstance.get(`/genres/${id}`);
  },
};
