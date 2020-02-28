import { all } from 'redux-saga/effects';
import movies from './movies';
import genres from './genres';

export default function* rootSaga() {
  yield all([
    movies(),
    genres(),
  ]);
}
