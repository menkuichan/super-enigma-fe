import React, { useEffect } from 'react';
import queryString from 'query-string';
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectMovies, selectTotalPages, selectLoading } from '../../store/reducers/movies';
import { GET_MOVIES_PENDING } from '../../store/actionTypes';
import MovieCard from '../../components/MovieCard';
import Pagination from '../../components/Pagination';
import Spinner from '../../components/Spinner';
import {
  MoviesViewContainer, MoviesListContainer, NoResultsContainer, NoResults,
} from './styles';

const MoviesView = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const moviesId = useSelector(selectMovies);
  const isLoading = useSelector(selectLoading);
  const totalPages = useSelector(selectTotalPages);
  const { page = 1, filter } = queryString.parse(location.search);
  const movies = Object.keys(moviesId).map((key) => moviesId[key]);

  const handleChangePage = (newPage) => {
    if (newPage <= totalPages && newPage > 0) {
      history.push(`/movies?page=${newPage}&filter=${filter}`);
    }
  };

  useEffect(() => {
    dispatch({
      type: GET_MOVIES_PENDING,
      payload: { page, filter },
    });
  }, [page, filter, dispatch]);

  return (
    <MoviesViewContainer>
      {isLoading ? <Spinner /> // eslint-disable-line
        : movies.length ? (
          <>
            <Pagination
              page={parseInt(page, 10)}
              totalPages={totalPages}
              handleClick={handleChangePage}
            />
            <MoviesListContainer>
              {movies.map((movie, index) => <MovieCard key={index} {...movie} />)}
            </MoviesListContainer>
            <Pagination
              page={parseInt(page, 10)}
              totalPages={totalPages}
              handleClick={handleChangePage}
            />
          </>
        )
          : (
            <NoResultsContainer>
              <NoResults>No results</NoResults>
            </NoResultsContainer>
          )}
    </MoviesViewContainer>
  );
};

export default MoviesView;
