import styled from 'styled-components';

export const MovieContainer = styled.div`
  display: flex;
  align-items: row;
  justify-content: flex-start;
  height: 100vh;
  background-color: ${({ theme }) => theme.movies.background};
  padding-top: 110px;
`;

export const PosterContainer = styled.div`
  height: auto;
  margin-left: 180px;
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
  width: 40%;
  padding-left: 90px;
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
  color: white;
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
  color: white;
`;

export const Rating = styled.p`
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

export const IconContainer = styled.div`
  transform: translateY(10%);
  margin-right: 5px;
`;

export const RatingContainer = styled.div`
  display: flex;
`;
