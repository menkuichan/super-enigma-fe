import {
  GET_GENRES_BY_ID_PENDING,
  GET_GENRES_PENDING,
  GET_GENRES_SUCCESS,
  GET_GENRES_ERROR,
} from '../actionTypes';
import { normalizeData } from '../../utils';

const defaultState = {
  byId: {},
  isLoading: false,
};

export const genres = (state = defaultState, { type, payload }) => {
  switch (type) {
    case GET_GENRES_BY_ID_PENDING:
      return { ...state, isLoading: true };
    case GET_GENRES_PENDING:
      return { ...state, isLoading: true };
    case GET_GENRES_SUCCESS:
      return {
        ...state,
        byId: normalizeData(payload.genres),
        isLoading: false,
      };
    case GET_GENRES_ERROR:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};

export const selectGenres = (store) => (
  Object
    .keys(store.genres.byId)
    .map((key) => store.genres.byId[key])
);
export const selectGenresByIds = (store, ids) => (
  selectGenres(store).filter(({ id }) => ids.includes(id))
);