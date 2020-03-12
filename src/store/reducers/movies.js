import { normalizeData } from '../../utils/index';
import {
  GET_MOVIES_PENDING,
  GET_MOVIES_SUCCESS,
  GET_MOVIES_ERROR,
  GET_MOVIE_DESCRIPTION_PENDING,
  GET_MOVIE_DESCRIPTION_SUCCESS,
  GET_MOVIE_DESCRIPTION_ERROR,
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
    case GET_MOVIE_DESCRIPTION_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case GET_MOVIES_SUCCESS:
      return {
        ...state,
        totalPages: payload.totalPages,
        byId: normalizeData(payload.movies),
        isLoading: false,
      };
    case GET_MOVIES_ERROR:
    case GET_MOVIE_DESCRIPTION_ERROR:
      return { ...state, isLoading: false };
    case GET_MOVIE_DESCRIPTION_SUCCESS:
      return {
        ...state,
        totalPages: payload.totalPages,
        byId: {
          ...state.byId,
          ...normalizeData(payload.movies),
          [payload.movie.id]: payload.movie,
        },
        isLoading: false,
      };
    default:
      return state;
  }
};

export const selectMovies = (store) => (
  Object
    .keys(store.movies.byId)
    .map((key) => store.movies.byId[key])
);
export const selectTotalPages = (store) => store.movies.totalPages;
export const selectMovieById = (store, id) => store.movies.byId[id];
export const selectSimilarMovies = (store, currentMovieId) => (
  Object
    .keys(store.movies.byId)
    .map((key) => store.movies.byId[key])
    .filter((movie) => movie.id !== +currentMovieId)
);
export const selectLoading = (store) => store.movies.isLoading;
