import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../MovieCard';
import { MoviesListContainer } from './styles';

const MoviesList = ({ movies = [] }) => (
  <MoviesListContainer>
    {movies.map((movie, index) => <MovieCard key={index} {...movie} />)}
  </MoviesListContainer>
);

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default MoviesList;
