import {
  GET_MOVIES_PENDING, GET_MOVIES_SUCCESS, GET_MOVIE_SUCCESS, GET_MOVIE_PENDING,
} from '../actionTypes';

const defaultState = {
  byId: {},
  page: 1,
  totalPages: 1,
  isLoading: false,
};

export const movies = (state = defaultState, { type, payload }) => {
  switch (type) {
    case GET_MOVIES_PENDING:
      return { ...state, isLoading: true };
    case GET_MOVIES_SUCCESS:
      return {
        ...state, totalPages: payload.totalPages, byId: payload.byId, isLoading: false,
      };
    case GET_MOVIE_PENDING:
      return { ...state, isLoading: true };
    case GET_MOVIE_SUCCESS:
      return { ...state, byId: payload.byId, isLoading: false };
    default:
      return state;
  }
};

export const selectMovies = (store) => (store.movies.byId);
export const selectTotalPages = (store) => (store.movies.totalPages);
export const selectMovieById = (store, id) => (store.movies.byId[id]);
export const selectLoading = (store) => (store.movies.isLoading);

export default movies;
