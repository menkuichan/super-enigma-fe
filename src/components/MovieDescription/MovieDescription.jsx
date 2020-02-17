import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import moviesAPI from '../../api/movies';
import StarIcon from '../Icons/StarIcon';
import { POSTER_BASE_URL } from '../../constants';
import {
  MovieContainer, PosterContainer, Poster, Title, Info, RatingContainer,
  IconContainer, Rating, Overview,
} from './styles';

const MovieDescription = () => {
  const [movie, setMovie] = useState({});
  const { id } = useParams();

  useEffect(() => {
    moviesAPI.getById(id).then((data) => setMovie(data));
  }, [id]);

  return (
    <MovieContainer>
      <PosterContainer>
        <Poster src={`${POSTER_BASE_URL}${movie.poster_path}`} />
      </PosterContainer>
      <Info>
        <Title>
          {movie.original_title}
        </Title>
        <RatingContainer>
          <IconContainer>
            <StarIcon />
          </IconContainer>
          <Rating>
            {`${movie.vote_average} | ${movie.vote_count}`}
          </Rating>
        </RatingContainer>
        <div>
          <Overview>
            {movie.overview}
          </Overview>
        </div>
      </Info>
    </MovieContainer>
  );
};

export default MovieDescription;
