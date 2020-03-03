import { combineReducers } from 'redux';
import { movies } from './movies';
import { genres } from './genres';
import { search } from './search';

export default combineReducers({
  movies,
  genres,
  search,
});
