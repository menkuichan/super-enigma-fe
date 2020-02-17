import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import getMovies from '../../../api/movies';
import MoviesList from '../../MoviesList/MoviesList';
import { MoviesViewContainer } from './styles';

const MoviesView = ({ movies, loadMovies }) => {
  useEffect(() => {
    getMovies
      .get({
        page: 1,
        perPage: 20,
      })
      .then((m) => {
        loadMovies(m.movies);
      });
  }, []);

  return (
    <MoviesViewContainer>
      <MoviesList movies={movies} />
    </MoviesViewContainer>
  );
};

MoviesView.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  loadMovies: PropTypes.func.isRequired,
};

export default MoviesView;
