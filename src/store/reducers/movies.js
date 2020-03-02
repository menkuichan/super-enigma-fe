import { normalizeData } from '../../utils/index';
import {
  GET_MOVIES_PENDING,
  GET_MOVIES_SUCCESS,
  GET_MOVIES_ERROR,
  GET_MOVIE_SUCCESS,
  CLEAR_SEARCH_MOVIES,
  GET_MOVIE_PENDING,
  GET_MOVIE_ERROR,
  SEARCH_MOVIES_PENDING,
  SEARCH_MOVIES_SUCCESS,
  SEARCH_MOVIES_ERROR,
} from '../actionTypes';

const defaultState = {
  byId: {},
  page: 1,
  totalPages: 1,
  search: {},
  isLoading: false,
};

export const movies = (state = defaultState, { type, payload }) => {
  switch (type) {
    case GET_MOVIES_PENDING:
    case GET_MOVIE_PENDING:
    case SEARCH_MOVIES_PENDING:
      return { ...state, isLoading: true };
    case GET_MOVIES_SUCCESS:
      return {
        ...state,
        totalPages: payload.totalPages,
        byId: normalizeData(payload.movies),
        isLoading: false,
      };
    case SEARCH_MOVIES_SUCCESS:
      return {
        ...state,
        search: normalizeData(payload.movies),
        isLoading: false,
      };
    case GET_MOVIE_SUCCESS:
      return {
        ...state,
        byId: { ...state.byId, [payload.movie.id]: payload.movie },
        isLoading: false,
      };
    case CLEAR_SEARCH_MOVIES:
      return {
        ...state,
        search: {},
      };
    case GET_MOVIES_ERROR:
    case GET_MOVIE_ERROR:
    case SEARCH_MOVIES_ERROR:
      return { ...state, isLoading: false };
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
export const selectSearchMovies = (store) => (
  Object
    .keys(store.movies.search)
    .map((key) => store.movies.search[key])
);
export const selectLoading = (store) => store.movies.isLoading;
