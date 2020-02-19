const defaultState = {
  data: [],
};

export const movies = (state = defaultState, { type, payload }) => {
  switch (type) {
    case 'LOAD_MOVIES':
      return { ...state, data: [...payload] };
    default:
      return state;
  }
};

export default movies;
