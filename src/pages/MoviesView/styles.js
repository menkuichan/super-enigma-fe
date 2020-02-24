import styled from 'styled-components';

export const NoResults = styled.h1`
  color: ${({ theme }) => theme.movies.noResultsColor};
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
  padding-top: 65px;
  background-color: ${({ theme }) => theme.movies.background};
`;

export const MoviesListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0 30px;
`;

export const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 150px;
  width: 100%;
`;
