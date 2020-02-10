import React from 'react';
import { ListWrapper, Item } from './styles';

const List = ({ movies = [] }) => (
  <ListWrapper>
    {(movies.length)
      ? movies.map((movie) => (
        <Item>
          <img src={`https://image.tmdb.org/t/p/w94_and_h141_bestv2${movie.poster_path}`} />
          {movie.title}
        </Item>
      ))
      : <Item>No results</Item>}
  </ListWrapper>
);

export default List;
