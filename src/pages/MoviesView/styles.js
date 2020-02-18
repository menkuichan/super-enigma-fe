import styled from 'styled-components';

export const MoviesViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 65px;
  background-color: ${({ theme }) => theme.movies.background};
`;
