import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import Star from '../../components/Icons/Star';
import { selectMovieById, selectLoading, selectSimilarMovies } from '../../store/reducers/movies';
import { selectGenresByIds } from '../../store/reducers/genres';
import { GET_MOVIE_PENDING } from '../../store/actionTypes';
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
  InfoInner,
} from './styles';

const MovieDescription = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const similarMovies = useSelector((state) => selectSimilarMovies(state, id));
  const movie = useSelector((state) => selectMovieById(state, id)) || {};
  const genres = useSelector((state) => selectGenresByIds(state, movie.genre_ids || []));

  useEffect(() => {
    dispatch({ type: GET_MOVIE_PENDING, payload: { id } });
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
          {movie.id && !isLoading && ( // ensure that movie loaded
            <MovieInfo>
              <PosterContainer>
                {movie.poster_path
                  ? <Poster src={`${POSTER_BASE_URL}${movie.poster_path}`} />
                  : <Poster src={EmptyPoster} />}
              </PosterContainer>
              <Info>
                <InfoInner>
                  <Title title={`${movie.title} (${new Date(movie.release_date).getFullYear()})`}>
                    {`${movie.title} (${new Date(movie.release_date).getFullYear()})`}
                    &nbsp;
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
                </InfoInner>
                <SimilarMoviesContainer>
                  {similarMovies
                    .slice(0, 3)
                    .map((similarMovie) => (
                      <SimilarPosterContainer key={similarMovie.id}>
                        <Link to={`/movies/${similarMovie.id}`}>
                          {similarMovie.poster_path
                            ? <SimilarPoster src={`${SIMILAR_POSTER_BASE_URL}${similarMovie.poster_path}`} />
                            : <SimilarPoster src={EmptyPoster} />}
                        </Link>
                      </SimilarPosterContainer>
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
