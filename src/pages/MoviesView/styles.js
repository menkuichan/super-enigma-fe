import styled from 'styled-components';

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
