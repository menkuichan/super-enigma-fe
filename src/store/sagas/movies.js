import { all, call, put, takeLatest } from 'redux-saga/effects';
import moviesApi from '../../api/movies';
import { MOVIES_PARAMS } from '../../constants';
import { GET_MOVIES_PENDING, GET_MOVIES_SUCCESS, GET_MOVIES_ERROR } from '../actionTypes';

function* loadMovies(action) {
  const { page, filter } = action.payload;
  try {
    const { movies, totalPages } = yield call(moviesApi.get, {
      page,
      perPage: MOVIES_PARAMS.PER_PAGE,
      sortBy: filter,
    });
    yield put({ type: GET_MOVIES_SUCCESS, payload: { movies, totalPages } });
  } catch (e) {
    yield put({ type: GET_MOVIES_ERROR, payload: e.message });
  }
}

export default function () {
  return all([
    takeLatest(GET_MOVIES_PENDING, loadMovies),
  ]);
}
