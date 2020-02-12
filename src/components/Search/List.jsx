import React from 'react';
import PropTypes from 'prop-types';
import { POSTER_BASE_URL } from '../../constants';
import {
  ListWrapper, Item, Poster, Info, Title, Overview,
} from './styles';

const List = ({ movies = [] }) => {
  const getYear = (date) => {
    if (date) {
      return `(${new Date(date).getFullYear()})`;
    }
    return '';
  };

  return (
    <ListWrapper>
      {(movies.length)
        ? movies.map((movie, index) => (
          <Item
            key={index} // eslint-disable-line
          >
            <Poster
              src={`${POSTER_BASE_URL}${movie.poster_path}`}
            />
            <Info>
              <Title>
                {`${movie.title} ${getYear(movie.release_date)}`}
              </Title>
              <Overview>
                {`${movie.overview}`}
              </Overview>
            </Info>
          </Item>
        ))
        : <Item textColor="gray">No results</Item>}
    </ListWrapper>
  );
};

List.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default List;
