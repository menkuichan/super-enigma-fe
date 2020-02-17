import React from 'react';
import PropTypes from 'prop-types';
import { POSTER_BASE_URL } from '../../constants';
import {
  CardContainer, PosterContainer, Poster, Info, Title, Rating,
} from './styles';

const MovieCard = ({
  title, vote_average, vote_count, poster_path,
}) => (
  <CardContainer>
    <PosterContainer>
      <Poster src={`${POSTER_BASE_URL}${poster_path}`} />
    </PosterContainer>
    <Info>
      <Title>
        {title}
      </Title>
      <Rating>
        {`${vote_average} | ${vote_count}`}
      </Rating>
    </Info>
  </CardContainer>
);

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  vote_average: PropTypes.number.isRequired,
  vote_count: PropTypes.number.isRequired,
  poster_path: PropTypes.string.isRequired,
};

export default MovieCard;
