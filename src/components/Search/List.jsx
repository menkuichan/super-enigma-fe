import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import EmptyPoster from '../../../assets/empty-poster.png';
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

const List = ({ movies }) => (
  <ListWrapper>
    {movies.map((movie, index) => (
      // eslint-disable-next-line
      <Link to={`/movies/${movie.id}`}>
        <Item key={index}>
          {movie.poster_path
            ? <Poster src={`${POSTER_BASE_URL}${movie.poster_path}`} />
            : <Poster src={EmptyPoster} />}
          <Info>
            <Title title={getTitle(movie.title, movie.release_date)}>
              {getTitle(movie.title, movie.release_date)}
            </Title>
            <Overview>
              {movie.overview}
            </Overview>
          </Info>
        </Item>
      </Link>
    ))}
  </ListWrapper>
);

List.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default List;
