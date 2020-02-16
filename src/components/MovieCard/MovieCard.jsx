import React from 'react';
import { POSTER_BASE_URL } from '../../constants';
import {
  CardContainer, PosterContainer, Poster, Info, Title, Rating,
} from './styles';

const MovieCard = ({ title, vote_average, poster_path }) => (
  <CardContainer>
    <PosterContainer>
      <Poster src={`${POSTER_BASE_URL}${poster_path}`} />
    </PosterContainer>
    <Info>
      <Title>
        {title}
      </Title>
      <Rating>
        {vote_average}
      </Rating>
    </Info>
  </CardContainer>
);

export default MovieCard;
