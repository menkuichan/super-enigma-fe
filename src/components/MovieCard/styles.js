import styled from 'styled-components';
import defaultTheme from '../../theme';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  padding: 0 16px;
`;

export const PosterContainer = styled.div`
`;

export const Poster = styled.img`
  vertical-align: middle;
  max-width: 100%;
  border-radius: ${({ theme }) => theme.movies.borderRadius};
  transition: box-shadow 0.2s ease-in-out;
`;

Poster.defaultProps = {
  theme: defaultTheme,
};

export const Info = styled.div`
  display: flex;
  overflow: hidden;
  flex-direction: column;
  padding: 15px 0;
`;

export const Title = styled.h1`
  font-family: 'Open Sans', sans-serif;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 0;
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.movies.whiteText};
  transition: color 0.2s ease-in-out;
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

Rating.defaultProps = {
  theme: defaultTheme,
};

export const IconContainer = styled.div`
  margin-right: 5px;
`;

export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Inner = styled.div`
  a {
    display: block;
  }

  &:hover {
    ${Poster} {
      box-shadow: 0px 1px 3px ${({ theme }) => theme.movies.boxShadow};
    }

    ${Title} {
      color: ${({ theme }) => theme.movies.hoveredTitleColor};
    }
  }
`;
