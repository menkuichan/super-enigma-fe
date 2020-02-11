import React from 'react';
import PropTypes from 'prop-types';
import {
  ListWrapper, Item, Poster, DescriptionWrapper, Description,
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
            <Poster src={`https://image.tmdb.org/t/p/w94_and_h141_bestv2${movie.poster_path}`} />
            <DescriptionWrapper>
              <Description fontWeight="bold" textSize="16px">
                {`${movie.title} ${getYear(movie.release_date)}`}
              </Description>
              <Description textSize="12px">
                {`${movie.overview.slice(0, 27).trim()}...`}
              </Description>
            </DescriptionWrapper>
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
