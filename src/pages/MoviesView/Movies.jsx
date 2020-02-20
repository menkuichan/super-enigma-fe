import React, { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import queryString from 'query-string';
import { selectMovies, selectTotalPages } from '../../store/reducers/movies';
import { GET_MOVIES_PENDING } from '../../store/actionTypes';
import MoviesList from '../../components/MoviesList/MoviesList';
import Pagination from '../../components/Pagination';
import { MoviesViewContainer } from './styles';

const MoviesView = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const movies = useSelector(selectMovies);
  const totalPages = useSelector(selectTotalPages);

  const { page } = queryString.parse(location.search);
  const queryPage = page || 1;

  const handleChangePage = (newPage) => {
    if (newPage <= totalPages && newPage > 0) {
      history.push(`/movies/?page=${newPage}`);
    }
  };

  useEffect(() => {
    dispatch({
      type: GET_MOVIES_PENDING,
      payload: { page: queryPage },
    });
  }, [page]);

  return (
    <MoviesViewContainer>
      <Pagination
        page={parseInt(queryPage, 10)}
        totalPages={totalPages}
        handleClick={handleChangePage}
      />
      <MoviesList movies={movies} />
    </MoviesViewContainer>
  );
};

export default MoviesView;
