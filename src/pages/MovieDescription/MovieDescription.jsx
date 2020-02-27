import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import StarIcon from '../../components/Icons/StarIcon';
import { selectMovieById, selectLoading } from '../../store/reducers/movies';
import { selectGenresByIds } from '../../store/reducers/genres';
import { GET_MOVIE_PENDING } from '../../store/actionTypes';
import Spinner from '../../components/Spinner';
import EmptyPoster from '../../../assets/empty-poster.png';
import { POSTER_BASE_URL } from '../../constants';
import {
  MovieContainer,
  PosterContainer,
  Poster,
  Title,
  Info,
  RatingContainer,
  IconContainer,
  SpinnerContainer,
  Rating,
  Overview,
  OriginalTitle,
  Language,
  GenresContainer,
  Genres,
} from './styles';

const MovieDescription = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const movie = useSelector((state) => selectMovieById(state, id)) || {};
  const genresNames = useSelector((state) => selectGenresByIds(state, movie.genre_ids || []));

  useEffect(() => {
    dispatch({
      type: GET_MOVIE_PENDING,
      payload: { id },
    });
  }, [id]);

  const {
    poster_path, title, release_date, vote_average, vote_count, overview,
    original_title, original_language, popularity,
  } = movie;

  return (
    <MovieContainer>
      {isLoading ? <SpinnerContainer><Spinner /></SpinnerContainer>
        : (
          <>
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
              <GenresContainer>
                <Genres>
                  {genresNames.join(', ')}
                </Genres>
              </GenresContainer>
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
          </>
        )}
    </MovieContainer>
  );
};

export default MovieDescription;
