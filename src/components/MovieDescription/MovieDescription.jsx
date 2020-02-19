import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import moviesAPI from '../../api/movies';
import StarIcon from '../Icons/StarIcon';
import { POSTER_BASE_URL } from '../../constants';
import {
  MovieContainer, PosterContainer, Poster, Title, Info, RatingContainer,
  IconContainer, Rating, Overview, OriginalTitle, Language,
} from './styles';

const MovieDescription = () => {
  const [movie, setMovie] = useState({});
  const { id } = useParams();

  useEffect(() => {
    moviesAPI.getById(id).then((data) => setMovie(data));
  }, [id]);
  const {
    poster_path, title, release_date, vote_average, vote_count, overview,
    original_title, original_language, popularity,
  } = movie;

  return (
    <MovieContainer>
      <PosterContainer>
        <Poster src={`${POSTER_BASE_URL}${poster_path}`} />
      </PosterContainer>
      <Info>
        <Title>
          {`${title} (${new Date(release_date).getFullYear()}) `}
          <Language>{original_language}</Language>
        </Title>
        <OriginalTitle>
          {original_title}
        </OriginalTitle>
        <RatingContainer>
          <Rating>
            {`Popularity: ${popularity}`}
          </Rating>
        </RatingContainer>
        <RatingContainer>
          <IconContainer>
            <StarIcon />
          </IconContainer>
          <Rating>
            {`${vote_average} | ${vote_count}`}
          </Rating>
        </RatingContainer>
        <div>
          <Overview>
            {overview}
          </Overview>
        </div>
      </Info>
    </MovieContainer>
  );
};

export default MovieDescription;
