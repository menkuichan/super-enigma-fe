import { GET_MOVIES_PENDING, GET_MOVIES_SUCCESS } from '../actionTypes';

const defaultState = {
  data: [],
  page: 1,
  totalPages: 1,
};

export const movies = (state = defaultState, { type, payload }) => {
  switch (type) {
    case GET_MOVIES_PENDING:
      return { ...state };
    case GET_MOVIES_SUCCESS:
      return { ...state, data: payload.movies, totalPages: payload.totalPages };
    default:
      return state;
  }
};

export const selectMovies = (store) => (store.movies.data);
export const selectTotalPages = (store) => (store.movies.totalPages);

export default movies;
