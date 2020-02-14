import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 250px;
`;

export const PosterContainer = styled.div`
`;

export const Poster = styled.img`
  max-width: 100%;
  border-radius: 15px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
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
  line-height: 18px;
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
`;
