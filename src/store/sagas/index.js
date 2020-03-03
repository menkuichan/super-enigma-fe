import { all } from 'redux-saga/effects';
import movies from './movies';
import genres from './genres';
import search from './search';

export default function* rootSaga() {
  yield all([
    movies(),
    genres(),
    search(),
  ]);
}
