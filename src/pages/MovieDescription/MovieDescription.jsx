import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import Star from '../../components/Icons/Star';
import { selectMovieById, selectLoading, selectSimilarMovies } from '../../store/reducers/movies';
import { selectGenresByIds } from '../../store/reducers/genres';
import { GET_MOVIE_DESCRIPTION_PENDING } from '../../store/actionTypes';
import Spinner from '../../components/Spinner';
import EmptyPoster from '../../../assets/empty-poster.png';
import { POSTER_BASE_URL, SIMILAR_POSTER_BASE_URL } from '../../constants';
import {
  MovieContainer,
  MovieInfo,
  TransitionBox,
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
  const similarMovies = useSelector((state) => selectSimilarMovies(state, id));
  const movie = useSelector((state) => selectMovieById(state, id)) || {};
  const genres = useSelector((state) => selectGenresByIds(state, movie.genre_ids || []));

  useEffect(() => {
    dispatch({ type: GET_MOVIE_DESCRIPTION_PENDING, payload: { id } });
  }, [id, dispatch]);

  return (
    <MovieContainer>
      {isLoading && <SpinnerContainer><Spinner /></SpinnerContainer>}
      <CSSTransition
        in={!isLoading}
        timeout={300}
        classNames="page"
        unmountOnExit
      >
        <TransitionBox>
          {movie.id && !isLoading && (
            <MovieInfo data-testid="movieInfo">
              <PosterContainer>
                {movie.poster_path
                  ? <Poster src={`${POSTER_BASE_URL}${movie.poster_path}`} />
                  : <Poster src={EmptyPoster} />}
              </PosterContainer>
              <Info>
                <div>
                  <Title title={`${movie.title} ${movie.release_date && `(${new Date(movie.release_date).getFullYear()})`}`}>
                    {`${movie.title} ${movie.release_date && `(${new Date(movie.release_date).getFullYear()})`}`}
                    <Language>{movie.original_language}</Language>
                  </Title>
                  <OriginalTitle>{movie.original_title}</OriginalTitle>
                  <GenresContainer>
                    <Genres>{genres.map((genre) => genre.name).join(', ')}</Genres>
                  </GenresContainer>
                  <RatingContainer>
                    <Rating>{`Popularity: ${movie.popularity}`}</Rating>
                  </RatingContainer>
                  <RatingContainer>
                    <IconContainer><Star /></IconContainer>
                    <Rating>{`${movie.vote_average} | ${movie.vote_count}`}</Rating>
                  </RatingContainer>
                  <div>
                    <Overview>{movie.overview}</Overview>
                  </div>
                </div>
                <SimilarMoviesContainer>
                  {similarMovies
                    .slice(0, 3)
                    .map((similarMovie) => (
                      <Link
                        data-testid="similarMovie"
                        key={similarMovie.id}
                        to={`/movies/${similarMovie.id}`}
                      >
                        <SimilarPosterContainer>
                          {similarMovie.poster_path
                            ? <SimilarPoster src={`${SIMILAR_POSTER_BASE_URL}${similarMovie.poster_path}`} />
                            : <SimilarPoster src={EmptyPoster} />}
                        </SimilarPosterContainer>
                      </Link>
                    ))}
                </SimilarMoviesContainer>
              </Info>
            </MovieInfo>
          )}
        </TransitionBox>
      </CSSTransition>
    </MovieContainer>
  );
};

export default MovieDescription;
