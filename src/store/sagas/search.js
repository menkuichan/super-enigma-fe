import {
  all, call, put, takeLatest,
} from 'redux-saga/effects';
import moviesApi from '../../api/movies';
import { SEARCH_PARAMS } from '../../constants';
import {
  SEARCH_MOVIES_PENDING,
  SEARCH_MOVIES_SUCCESS,
  SEARCH_MOVIES_ERROR,
} from '../actionTypes';

function* searchMovies(action) {
  const { title } = action.payload;
  try {
    const { movies } = yield call(moviesApi.get, {
      title,
      page: SEARCH_PARAMS.REQUEST_PAGE,
      perPage: SEARCH_PARAMS.REQUEST_PER_PAGE,
    });

    yield put({
      type: SEARCH_MOVIES_SUCCESS,
      payload: { movies },
    });
  } catch (e) {
    yield put({ type: SEARCH_MOVIES_ERROR, payload: e.message });
  }
}

export default function () {
  return all([
    takeLatest(SEARCH_MOVIES_PENDING, searchMovies),
  ]);
}
