import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import StarIcon from '../../components/Icons/StarIcon';
import { selectMovieById, selectLoading, selectSimilarMovies } from '../../store/reducers/movies';
import { selectGenresByIds } from '../../store/reducers/genres';
import { GET_MOVIE_PENDING, GET_SIMILAR_MOVIES_PENDING } from '../../store/actionTypes';
import Spinner from '../../components/Spinner';
import EmptyPoster from '../../../assets/empty-poster.png';
import { POSTER_BASE_URL, SIMILAR_POSTER_BASE_URL } from '../../constants';
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
  SimilarMoviesContainer,
  SimilarPosterContainer,
  SimilarPoster,
} from './styles';

const MovieDescription = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const similarMovies = useSelector(selectSimilarMovies);
  const movie = useSelector((state) => selectMovieById(state, id)) || {};
  const genres = useSelector((state) => selectGenresByIds(state, movie.genre_ids || []));

  useEffect(() => {
    dispatch({
      type: GET_MOVIE_PENDING,
      payload: { id },
    });
    dispatch({
      type: GET_SIMILAR_MOVIES_PENDING,
      payload: { page: 1, perPage: 3, genres: genres.map((genre) => genre.id) },
    });
  }, [id, genres.length]);

  const {
    poster_path, title, release_date, vote_average, vote_count, overview,
    original_title, original_language, popularity,
  } = movie;
  const fullMovieTitle = `${title} (${new Date(release_date).getFullYear()}) `;

  return (
    <>
      {isLoading ? <SpinnerContainer><Spinner /></SpinnerContainer>
        : (
          <MovieContainer>
            <PosterContainer>
              {poster_path
                ? <Poster src={`${POSTER_BASE_URL}${poster_path}`} />
                : <Poster src={EmptyPoster} />}
            </PosterContainer>
            <Info>
              <div>
                <Title title={fullMovieTitle}>
                  {fullMovieTitle}
                  <Language>{original_language}</Language>
                </Title>
                <OriginalTitle>
                  {original_title}
                </OriginalTitle>
                <GenresContainer>
                  <Genres>
                    {genres.map((genre) => genre.name).join(', ')}
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
              </div>
              <SimilarMoviesContainer>
                {similarMovies.map((similarMovie) => (
                  similarMovie.id !== movie.id && (
                  <Link to={`/movies/${similarMovie.id}`}>
                    <SimilarPosterContainer>
                      {similarMovie.poster_path
                        ? <SimilarPoster src={`${SIMILAR_POSTER_BASE_URL}${similarMovie.poster_path}`} />
                        : <SimilarPoster src={EmptyPoster} />}
                    </SimilarPosterContainer>
                  </Link>
                  )
                ))}
              </SimilarMoviesContainer>
            </Info>
          </MovieContainer>
        )}
    </>
  );
};

export default MovieDescription;
