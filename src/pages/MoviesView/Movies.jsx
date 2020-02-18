import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import getMovies from '../../api/movies';
import MoviesList from '../../components/MoviesList/MoviesList';
import Pagination from '../../components/Pagination';
import { MoviesViewContainer } from './styles';

const MoviesView = ({ movies, loadMovies }) => {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

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
        loadMovies(data.movies);
        setTotalPages(data.totalPages);
      });
  }, [page]);

  return (
    <MoviesViewContainer>
      <Pagination page={page} totalPages={totalPages} handleClick={handleChangePage} />
      <MoviesList movies={movies} />
    </MoviesViewContainer>
  );
};

MoviesView.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  loadMovies: PropTypes.func.isRequired,
};

export default MoviesView;
