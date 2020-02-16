import React from 'react';
import MovieCard from '../MovieCard';

const MoviesList = ({ movies = [] }) => (
  <div>
    {movies.map((movie, i) => <MovieCard key={i} {...movie} />)}
  </div>
);

export default MoviesList;
