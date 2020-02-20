import { all, call, put, takeLatest } from 'redux-saga/effects';
import moviesApi from '../../api/movies';
import { MOVIES_PARAMS, NAV_LINKS } from '../../constants';
import { GET_MOVIES_PENDING, GET_MOVIES_SUCCESS, GET_MOVIES_ERROR } from '../actionTypes';

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

export default function () {
  return all([
    takeLatest(GET_MOVIES_PENDING, loadMovies),
  ]);
}