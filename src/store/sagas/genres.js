import { all, call, put, takeLatest } from 'redux-saga/effects';
import genresApi from '../../api/genres';
import {
  GET_GENRES_PENDING,
  GET_GENRES_SUCCESS,
  GET_GENRES_ERROR,
} from '../actionTypes';

function* loadGenres() {
  try {
    const genres = yield call(genresApi.get);
    yield put({
      type: GET_GENRES_SUCCESS,
      payload: { genres },
    });
  } catch (e) {
    yield put({ type: GET_GENRES_ERROR, payload: e.message });
  }
}

export default function () {
  return all([
    takeLatest(GET_GENRES_PENDING, loadGenres),
  ]);
}
