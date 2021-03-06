import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { POSTER_BASE_URL } from '../../constants';
import Star from '../Icons/Star';
import EmptyPoster from '../../../assets/empty-poster.png';
import {
  CardContainer,
  PosterContainer,
  Poster,
  Info,
  Title,
  Rating,
  IconContainer,
  RatingContainer,
  Inner,
} from './styles';

const MovieCard = ({
  title, vote_average, vote_count, poster_path, id,
}) => (
  <CardContainer data-testid="movieCard">
    <Inner>
      <Link to={`/movies/${id}`}>
        <PosterContainer>
          {poster_path
            ? <Poster src={`${POSTER_BASE_URL}${poster_path}`} />
            : <Poster src={EmptyPoster} />}
        </PosterContainer>
        <Info>
          <Title title={title}>
            {title}
          </Title>
          <RatingContainer>
            <IconContainer>
              <Star />
            </IconContainer>
            <Rating>
              {`${vote_average} | ${vote_count}`}
            </Rating>
          </RatingContainer>
        </Info>
      </Link>
    </Inner>
  </CardContainer>
);

MovieCard.defaultProps = {
  poster_path: null,
};

MovieCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  vote_average: PropTypes.number.isRequired,
  vote_count: PropTypes.number.isRequired,
  poster_path: PropTypes.string,
};

export default MovieCard;
