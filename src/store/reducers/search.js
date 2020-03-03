import { normalizeData } from '../../utils/index';
import {
  SEARCH_MOVIES_PENDING,
  SEARCH_MOVIES_SUCCESS,
  SEARCH_MOVIES_ERROR,
  CLEAR_SEARCH_MOVIES,
} from '../actionTypes';

const defaultState = {
  byId: {},
};

export const search = (state = defaultState, { type, payload }) => {
  switch (type) {
    case SEARCH_MOVIES_PENDING:
      return { ...state };
    case SEARCH_MOVIES_SUCCESS:
      return {
        ...state,
        byId: normalizeData(payload.movies),
      };
    case CLEAR_SEARCH_MOVIES:
      return {
        ...state,
        byId: {},
      };
    case SEARCH_MOVIES_ERROR:
      return { ...state };
    default:
      return state;
  }
};

export const selectSearchMovies = (store) => (
  Object
    .keys(store.search.byId)
    .map((key) => store.search.byId[key])
);
