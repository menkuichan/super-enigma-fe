import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectMovies } from '../../store/reducers/movies';
import getMovies from '../../api/movies';
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
    getMovies
      .get({
        page,
        perPage: 20,
      })
      .then((data) => {
        dispatch({
          type: 'LOAD_MOVIES',
          payload: data.movies,
        });
        setTotalPages(data.totalPages);
      });
  }, [dispatch, page]);

  return (
    <MoviesViewContainer>
      <Pagination page={page} totalPages={totalPages} handleClick={handleChangePage} />
      <MoviesList movies={movies} />
    </MoviesViewContainer>
  );
};

export default MoviesView;
