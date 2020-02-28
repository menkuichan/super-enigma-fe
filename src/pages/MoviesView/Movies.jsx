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
  MoviesViewContainer, MoviesListContainer, NoResultsContainer, NoResults, SpinnerContainer,
} from './styles';

const MoviesView = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const movies = useSelector(selectMovies);
  const isLoading = useSelector(selectLoading);
  const totalPages = useSelector(selectTotalPages);
  const {
    page = 1,
    filter,
    year,
    vote_average,
    sortBy,
  } = queryString.parse(location.search);
  const { genre = [] } = queryString.parse(location.search);

  const handleChangePage = (newPage) => {
    if (newPage <= totalPages && newPage > 0) {
      history.push(`/movies?${queryString.stringify({
        page: newPage,
        filter,
        year,
        vote_average,
        genre,
        sortBy,
      }, { sort: false })}`);
    }
  };

  useEffect(() => {
    dispatch({
      type: GET_MOVIES_PENDING,
      payload: {
        page,
        filter,
        year,
        vote_average,
        genre,
        sortBy,
      },
    });
  }, [page, filter, year, vote_average, sortBy, genre.length]);

  return (
    <MoviesViewContainer>
      {isLoading && <SpinnerContainer><Spinner /></SpinnerContainer>}
      {movies.length && !isLoading && (
        <>
          <Pagination
            page={parseInt(page, 10)}
            totalPages={totalPages}
            handleClick={handleChangePage}
          />
          <MoviesListContainer>
            {movies.map((movie, index) => (
              <MovieCard
                key={index} // eslint-disable-line
                {...movie} // eslint-disable-line
              />
            ))}
          </MoviesListContainer>
          <Pagination
            page={parseInt(page, 10)}
            totalPages={totalPages}
            handleClick={handleChangePage}
          />
        </>
      )}
      {!movies.length && !isLoading && (
        <NoResultsContainer>
          <NoResults>No results</NoResults>
        </NoResultsContainer>
      )}
    </MoviesViewContainer>
  );
};

export default MoviesView;
