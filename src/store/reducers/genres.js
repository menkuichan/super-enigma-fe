import { GET_GENRES_PENDING, GET_GENRES_SUCCESS, GET_GENRES_ERROR } from '../actionTypes';
import { normalizeData } from '../../utils';

const defaultState = {
  byId: {},
  isLoading: false,
};

export const genres = (state = defaultState, { type, payload }) => {
  switch (type) {
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

export const selectGenres = (store) => store.genres.byId;
export const selectGenresByIds = (store, ids) => {
  const result = [];
  ids.forEach(
    (id) => {
      Object.keys(store.genres.byId).forEach((key) => {
        if (store.genres.byId[key].id === id) {
          result.push(store.genres.byId[key].name);
        }
      });
    },
  );
  return result;
};
