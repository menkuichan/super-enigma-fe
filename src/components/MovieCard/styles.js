import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 250px;
  margin: 40px;
`;

export const PosterContainer = styled.div`
`;

export const Poster = styled.img`
  vertical-align: middle;
  max-width: 100%;
  border-radius: ${({ theme }) => theme.movies.borderRadius};
  transition: box-shadow 0.2s ease-in-out;

  &:hover {
    border-radius: ${({ theme }) => theme.movies.borderRadius};
    box-shadow: 2px 2px 8px ${({ theme }) => theme.movies.boxShadow};;
  }
`;

export const Info = styled.div`
  display: flex;
  overflow: hidden;
  flex-direction: column;
  padding: 15px;
`;

export const Title = styled.h1`
  font-family: 'Open Sans', sans-serif;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 0;
  font-size: 18px;
  font-weight: 600;
  color: white;
`;

export const Rating = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-size: 13px;
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