import styled from 'styled-components';

export const MovieContainer = styled.div`
  display: flex;
  align-items: row;
  height: 100vh;
  background-color: ${({ theme }) => theme.movies.background};
  padding: 57px 30px;
`;

export const PosterContainer = styled.div`
  height: auto;
`;

export const Poster = styled.img`
  vertical-align: middle;
  max-width: 400px;
  border-radius: ${({ theme }) => theme.movies.borderRadius};
`;

export const Info = styled.div`
  display: flex;
  overflow: hidden;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-family: 'Open Sans', sans-serif;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 0;
  font-size: 23px;
  font-weight: 600;
  color: white;
`;

export const Overview = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  font-weight: 300;
  line-height: 15px;
  margin: 0;
  color: white;
`;

export const Rating = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-size: 15px;
  font-weight: 300;
  line-height: 15px;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.movies.text};
`;

export const IconContainer = styled.div`
  transform: translateY(-5%);
  margin-right: 5px;
`;

export const RatingContainer = styled.div`
  display: flex;
`;
