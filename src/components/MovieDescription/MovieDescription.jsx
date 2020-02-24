import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import StarIcon from '../Icons/StarIcon';
import { selectMovieById } from '../../store/reducers/movies';
import { GET_MOVIE_PENDING } from '../../store/actionTypes';
import EmptyPoster from '../../../assets/empty-poster.png';
import { POSTER_BASE_URL } from '../../constants';
import {
  MovieContainer, PosterContainer, Poster, Title, Info, RatingContainer,
  IconContainer, Rating, Overview, OriginalTitle, Language,
} from './styles';

const MovieDescription = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: GET_MOVIE_PENDING,
      payload: { id },
    });
  }, [dispatch, id]);

  const movie = useSelector((state) => selectMovieById(state, id)) || {};

  const {
    poster_path, title, release_date, vote_average, vote_count, overview,
    original_title, original_language, popularity,
  } = movie;

  return (
    <MovieContainer>
      <PosterContainer>
        {poster_path
          ? <Poster src={`${POSTER_BASE_URL}${poster_path}`} />
          : <Poster src={EmptyPoster} />}
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
