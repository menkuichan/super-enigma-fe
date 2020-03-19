import styled from 'styled-components';

export const TransitionBox = styled.div`
  position: relative;
  width: 100%;

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


export const NoResults = styled.h1`
  color: ${({ theme }) => theme.movies.whiteText};
  font-family: 'Open Sans', sans-serif;
  font-size: 25px;
  font-weight: 300;
  line-height: 15px;
`;

export const NoResultsContainer = styled.div``;

export const MoviesViewContainer = styled.div`
  display: flex;
  height: 100vh;
  flex: 1;
  overflow: auto;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.movies.background};
  padding: 25px 0;
`;

export const MoviesListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 0 5%;
`;

export const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 150px;
  width: 100%;
`;
