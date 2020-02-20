import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectMovies } from '../../store/reducers/movies';
import { GET_MOVIES_PENDING } from '../../store/actionTypes';
import MoviesList from '../../components/MoviesList/MoviesList';
import Pagination from '../../components/Pagination';
import { MoviesViewContainer } from './styles';

const MoviesView = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const movies = useSelector(selectMovies);

  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  useEffect(() => {
    dispatch({
      type: GET_MOVIES_PENDING,
      payload: page,
    });
  }, [page]);

  return (
    <MoviesViewContainer>
      <Pagination page={page} totalPages={totalPages} handleClick={handleChangePage} />
      <MoviesList movies={movies} />
    </MoviesViewContainer>
  );
};

export default MoviesView;
