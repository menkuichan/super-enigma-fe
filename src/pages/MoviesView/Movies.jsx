import React, { useEffect, useRef } from 'react';
import queryString from 'query-string';
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import isEqual from 'lodash.isequal';
import { CSSTransition } from 'react-transition-group';
import { selectMovies, selectTotalPages, selectLoading } from '../../store/reducers/movies';
import { GET_MOVIES_PENDING } from '../../store/actionTypes';
import MovieCard from '../../components/MovieCard';
import Pagination from '../../components/Pagination';
import Spinner from '../../components/Spinner';
import {
  MoviesViewContainer,
  MoviesListContainer,
  NoResultsContainer,
  NoResults,
  SpinnerContainer,
  TransitionBox,
} from './styles';

const MoviesView = () => {
  const previousFilters = useRef();
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
    genre = [],
    title,
  } = queryString.parse(location.search);

  const handleChangePage = (newPage) => {
    if (newPage <= totalPages && newPage > 0) {
      history.push(`/movies?${queryString.stringify({
        page: newPage,
        filter,
        year,
        vote_average,
        genre,
        sortBy,
        title,
      }, { sort: false })}`);
    }
  };

  useEffect(() => {
    if (isEqual(
      previousFilters.current,
      [page, filter, year, vote_average, sortBy, genre, title],
    )) {
      return;
    }
    dispatch({
      type: GET_MOVIES_PENDING,
      payload: {
        page,
        filter,
        year,
        vote_average,
        genre,
        sortBy,
        title,
      },
    });
  });

  useEffect(() => {
    previousFilters.current = [page, filter, year, vote_average, sortBy, genre, title];
  });

  return (
    <MoviesViewContainer>
      {isLoading && <SpinnerContainer><Spinner /></SpinnerContainer>}
      <CSSTransition
        in={!isLoading}
        timeout={300}
        classNames="page"
        unmountOnExit
      >
        <TransitionBox>
          {!!movies.length && !isLoading && (
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
              <NoResults data-testid="noResults">No results</NoResults>
            </NoResultsContainer>
          )}
        </TransitionBox>
      </CSSTransition>
    </MoviesViewContainer>
  );
};

export default MoviesView;
