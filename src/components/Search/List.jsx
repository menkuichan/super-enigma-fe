import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import EmptyPoster from '../../../assets/empty-poster.png';
import { POSTER_BASE_URL } from '../../constants';
import {
  ListContainer,
  Item,
  Poster,
  Info,
  Title,
  Overview,
  ShowAllItem,
} from './styles';

const getTitle = (title, date) => {
  if (date) {
    return `${title} (${new Date(date).getFullYear()})`;
  }
  return title;
};

const List = ({ movies, onItemClick, showAll }) => (
  <ListContainer>
    {movies.map((movie, index) => (
      <Link
        to={`/movies/${movie.id}`}
        key={index} // eslint-disable-line
      >
        <Item onClick={onItemClick}>
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
    <Item>
      <ShowAllItem onClick={showAll} color="link">
        Show all…
      </ShowAllItem>
    </Item>
  </ListContainer>
);

List.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  onItemClick: PropTypes.func.isRequired,
  showAll: PropTypes.func.isRequired,
};

export default List;
