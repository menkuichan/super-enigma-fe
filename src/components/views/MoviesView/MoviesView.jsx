import React, { useEffect } from 'react';
import getMovies from '../../../api/movies';
import MoviesList from '../../MoviesList/MoviesList';

const MoviesView = ({ movies, loadMovies }) => {
  useEffect(() => {
    getMovies
      .get({
        page: 1,
        perPage: 3,
      })
      .then((m) => {
        loadMovies(m.movies);
      });
  }, []);

  return (
    <div>
      <MoviesList movies={movies} />
    </div>
  );
};

export default MoviesView;
