import styled from 'styled-components';
import DefaultTrending from '../Icons/Trending';
import DefaultSortByIcon from '../Icons/SortBy';
import defaultTheme from '../../theme';

export const Trending = styled(DefaultTrending)`
  cursor: pointer;
  fill: ${({ theme }) => theme.filter.default};

  &:hover {
    fill:  ${({ theme }) => theme.filter.active};
  }
`;

export const SortBy = styled(DefaultSortByIcon)`
  cursor: pointer;
  ${({ direction }) => direction === 'desc' && 'transform: scaleY(-1);'}
`;

export const GenresContainer = styled.div`
  max-height: 100px;
  overflow: auto;
  padding: 7px;
`;

export const FilterContainer = styled.div`
  user-select: none;
  position: relative;
`;

export const IconContainer = styled.div`
`;

export const SortContainer = styled.div`
  position: absolute;
  top: 27px;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${({ theme }) => theme.filter.background};
  border: 1px solid ${({ theme }) => theme.filter.border};
  border-radius: 5px;
  width: 350px;
  z-index: 100;

  &::before {
    content: '';
    display: inline-block;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: -7px;
    display: inline-block;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 5px 7px 5px;
    border-color: transparent transparent ${({ theme }) => theme.filter.background} transparent;
  }
`;

SortContainer.defaultProps = {
  theme: defaultTheme,
};

export const ListContainer = styled.div`
  border-top: 1px solid ${({ theme }) => theme.filter.border};

  &:first-child {
    border-top: none;
  }
`;

ListContainer.defaultProps = {
  theme: defaultTheme,
};

export const LabelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid ${({ theme }) => theme.filter.border};

  &:last-child {
    border-bottom: none;
  }
`;

LabelContainer.defaultProps = {
  theme: defaultTheme,
};

export const Label = styled.h1`
  font-family: 'Open Sans', sans-serif;
  margin: 0;
  font-size: 15px;
  font-weight: 600;
  line-height: 15px;
`;

export const SpinnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
