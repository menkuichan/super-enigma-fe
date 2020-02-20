import { GET_MOVIES_PENDING, GET_MOVIES_SUCCESS } from '../actionTypes';

const defaultState = {
  data: [],
};

export const movies = (state = defaultState, { type, payload }) => {
  switch (type) {
    case GET_MOVIES_PENDING:
      return { ...state };
    case GET_MOVIES_SUCCESS:
      return { ...state, data: [...payload] };
    default:
      return state;
  }
};

export const selectMovies = (store) => (store.movies.data);

export default movies;
