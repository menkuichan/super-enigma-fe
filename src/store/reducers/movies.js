import { LOAD_MOVIES } from '../actionTypes';

const defaultState = {
  data: [],
};

export const movies = (state = defaultState, { type, payload }) => {
  switch (type) {
    case LOAD_MOVIES:
      return { ...state, data: [...payload] };
    default:
      return state;
  }
};

export const selectMovies = (store) => (store.movies.data);

export default movies;
