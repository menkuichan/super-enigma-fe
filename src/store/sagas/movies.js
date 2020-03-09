import { all, call, put, takeLatest } from 'redux-saga/effects';
import { batchActions } from 'redux-batched-actions';
import moviesApi from '../../api/movies';
import genresApi from '../../api/genres';
import { MOVIES_PARAMS, NAV_LINKS } from '../../constants';
import {
  GET_MOVIES_PENDING,
  GET_MOVIES_SUCCESS,
  GET_MOVIES_ERROR,
  GET_MOVIE_PENDING,
  GET_MOVIE_SUCCESS,
  GET_MOVIE_ERROR,
  GET_GENRES_SUCCESS,
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
  const {
    page,
    filter,
    year,
    vote_average,
    genre = '',
    sortBy,
    title,
  } = action.payload;

  try {
    const { movies, totalPages } = yield call(moviesApi.get, {
      page,
      perPage: MOVIES_PARAMS.PER_PAGE,
      sortBy: sortBy || getSortFilter(filter),
      filter,
      year,
      vote_average,
      genre,
      title,
    });
    yield put({
      type: GET_MOVIES_SUCCESS,
      payload: { totalPages, movies },
    });
  } catch (e) {
    yield put({ type: GET_MOVIES_ERROR, payload: e.message });
  }
}

function* getMovieDescriptonData(action) {
  const { id } = action.payload;
  try {
    const movie = yield call(moviesApi.getById, id);
    const [genres, { movies, totalPages }] = yield all([
      call(genresApi.get),
      call(moviesApi.get, {
        genre: movie.genre_ids.join(','),
      }),
    ]);

    yield put(batchActions([
      { type: GET_MOVIE_SUCCESS, payload: { movie } },
      { type: GET_GENRES_SUCCESS, payload: { genres } },
      { type: GET_MOVIES_SUCCESS, payload: { movies, totalPages: totalPages || 1 } },
    ]));
  } catch (e) {
    yield put({ type: GET_MOVIE_ERROR, payload: e.message });
  }
}

export default function () {
  return all([
    takeLatest(GET_MOVIES_PENDING, loadMovies),
    takeLatest(GET_MOVIE_PENDING, getMovieDescriptonData),
  ]);
}
