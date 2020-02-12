import React from 'react';
import PropTypes from 'prop-types';
import { POSTER_BASE_URL } from '../../constants';
import {
  ListWrapper, Item, Poster, Info, Title, Overview,
} from './styles';

const getTitle = (title, date) => {
  if (date) {
    return `${title} (${new Date(date).getFullYear()})`;
  }
  return title;
};

const List = ({ movies = [] }) => (
  <ListWrapper>
    {movies.length > 0
      ? movies.map((movie, index) => (
          // eslint-disable-next-line
          <Item key={index}>
            <Poster src={`${POSTER_BASE_URL}${movie.poster_path}`} />
            <Info>
              <Title title={getTitle(movie.title, movie.release_date)}>
                {getTitle(movie.title, movie.release_date)}
              </Title>
              <Overview>
                {movie.overview}
              </Overview>
            </Info>
          </Item>
      ))
      : <Item textColor="gray">No results</Item>}
  </ListWrapper>
);

List.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default List;
