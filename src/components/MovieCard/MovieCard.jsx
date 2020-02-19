import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { POSTER_BASE_URL } from '../../constants';
import StarIcon from '../Icons/StarIcon';
import {
  CardContainer, PosterContainer, Poster, Info, Title, Rating, IconContainer, RatingContainer,
} from './styles';

const MovieCard = ({
  title, vote_average, vote_count, poster_path, id,
}) => (
  <CardContainer>
    <Link to={`/movies/${id}`}>
      <PosterContainer>
        <Poster src={`${POSTER_BASE_URL}${poster_path}`} />
      </PosterContainer>
    </Link>
    <Info>
      <Title>
        {title}
      </Title>
      <RatingContainer>
        <IconContainer>
          <StarIcon />
        </IconContainer>
        <Rating>
          {`${vote_average} | ${vote_count}`}
        </Rating>
      </RatingContainer>
    </Info>
  </CardContainer>
);

MovieCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  vote_average: PropTypes.number.isRequired,
  vote_count: PropTypes.number.isRequired,
  poster_path: PropTypes.string.isRequired,
};

export default MovieCard;
