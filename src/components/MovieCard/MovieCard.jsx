import React from 'react';
import { POSTER_BASE_URL } from '../../constants';
import {
  CardContainer, PosterContainer, Poster, Info, Title, Rating,
} from './styles';

const MovieCard = () => (
  <CardContainer>
    <PosterContainer>
      <Poster src={`${POSTER_BASE_URL}/ziEuG1essDuWuC5lpWUaw1uXY2O.jpg`} />
    </PosterContainer>
    <Info>
      <Title>
        John Wick
      </Title>
      <Rating>
        7.1 | 58888 rates
      </Rating>
    </Info>
  </CardContainer>
);

export default MovieCard;
