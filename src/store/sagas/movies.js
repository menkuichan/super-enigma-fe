import { all, call, put, takeLatest } from 'redux-saga/effects';
import moviesApi from '../../api/movies';
import { MOVIES_PARAMS, NAV_LINKS } from '../../constants';
import {
  GET_MOVIES_PENDING, GET_MOVIES_SUCCESS, GET_MOVIES_ERROR,
  GET_MOVIE_PENDING, GET_MOVIE_SUCCESS, GET_MOVIE_ERROR,
} from '../actionTypes';

const getSortFilter = (filter) => {
  let sortBy;

  NAV_LINKS.forEach((link) => {
    if (link.value === filter) {
      sortBy = link.filter;
    }
  });

  return sortBy;
};

function* loadMovies(action) {
  const { page, filter } = action.payload;

  try {
    const { movies, totalPages } = yield call(moviesApi.get, {
      page,
      perPage: MOVIES_PARAMS.PER_PAGE,
      sortBy: getSortFilter(filter),
    });
    yield put({ type: GET_MOVIES_SUCCESS, payload: { movies, totalPages } });
  } catch (e) {
    yield put({ type: GET_MOVIES_ERROR, payload: e.message });
  }
}

function* loadMovie(action) {
  const { id } = action.payload;
  try {
    const movie = yield call(moviesApi.getById, id);
    yield put({ type: GET_MOVIE_SUCCESS, payload: [{ movie }] });
  } catch (e) {
    yield put({ type: GET_MOVIE_ERROR, payload: e.message });
  }
}

export default function () {
  return all([
    takeLatest(GET_MOVIES_PENDING, loadMovies),
    takeLatest(GET_MOVIE_PENDING, loadMovie),
  ]);
}
