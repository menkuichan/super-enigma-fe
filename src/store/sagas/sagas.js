import { call, put, takeLatest } from 'redux-saga/effects';
import moviesApi from '../../api/movies';
import { GET_MOVIES_PENDING, GET_MOVIES_SUCCESS, GET_MOVIES_ERROR } from '../actionTypes';

function* loadMovies(action) {
  const { page } = action.payload;
  try {
    const { movies } = yield call(moviesApi.get, {
      page,
      perPage: 20,
    });
    yield put({ type: GET_MOVIES_SUCCESS, movies });
  } catch (e) {
    yield put({ type: GET_MOVIES_ERROR, payload: e.message });
  }
}

function* rootSaga() {
  yield takeLatest(GET_MOVIES_PENDING, loadMovies);
}


export default rootSaga;
