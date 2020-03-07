import styled from 'styled-components';

export const MovieContainer = styled.div`
  flex: 1;
  overflow: auto;
`;

export const TransitionBox = styled.div`
  position: relative;

  &.page-enter {
    opacity: 0;
  }
  &.page-enter-active {
    opacity: 1;
    transition: opacity 2000ms;
  }
  &.page-exit {
    opacity: 1;
  }
  &.page-exit-active {
    opacity: 0;
    transition: opacity 2000ms;
  }
`;

export const MovieInfo = styled.div`
  display: flex;
  flex-direction: row;
  margin: 5% 0;
`;

export const PosterContainer = styled.div`
  margin-left: 180px;
  width: 30%;
`;

export const SimilarPosterContainer = styled.div`
  position: relative;
  width: 20%;
  margin-right: 3%;

  a {
    display: block;
  }
`;

export const SimilarPoster = styled.img`
  border-radius: ${({ theme }) => theme.movies.borderRadius};
  max-width: 100%;
  width: 100%;
  vertical-align: middle;
`;

export const Poster = styled.img`
  border-radius: ${({ theme }) => theme.movies.borderRadius};
  vertical-align: middle;
  max-width: 100%;
  width: 100%;
`;

export const Info = styled.div`
  display: flex;
  overflow: hidden;
  flex-direction: column;
  width: 48%;
  padding-left: 90px;
`;

export const InfoInner = styled.div`
  position: relative;
  margin-bottom: 25px;
`;

export const Title = styled.h1`
  font-family: 'Open Sans', sans-serif;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 0;
  margin-bottom: 0;
  font-size: 34px;
  font-weight: 300;
  line-height: 45px;
  color: ${({ theme }) => theme.movies.whiteText};
`;

export const OriginalTitle = styled.h2`
  font-family: 'Open Sans', sans-serif;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 0;
  font-size: 22px;
  line-height: 30px;
  font-weight: 300;
  color: ${({ theme }) => theme.movies.text};
`;

export const Language = styled.span`
  margin-top: 0;
  font-size: 20px;
  line-height: 30px;
  font-weight: 300;
  color: ${({ theme }) => theme.movies.text};
`;

export const Overview = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  font-weight: 300;
  line-height: 25px;
  color: ${({ theme }) => theme.movies.whiteText};
`;

export const Rating = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-size: 15px;
  font-weight: 300;
  line-height: 22px;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.movies.text};
`;

export const IconContainer = styled.div`
  margin-right: 5px;
`;

export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

export const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 150px;
  width: 100%;
`;

export const GenresContainer = styled.div`
  display: flex;
`;

export const Genres = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-size: 15px;
  font-weight: 300;
  line-height: 22px;
  margin: 0;
  margin-bottom: 5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.movies.text};
`;

export const SimilarMoviesContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
