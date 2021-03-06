import styled from 'styled-components';
import DefaultSearchIcon from '../Icons/Magnifier';
import defaultTheme from '../../theme';

const inputHeight = 36;

export const Magnifier = styled(DefaultSearchIcon)`
  display: block;
`;

export const SearchInput = styled.input`
  font-family: 'Open Sans', sans-serif;
  border: 0;
  color: ${({ theme }) => theme.header.text};
  font-size: 14px;
  background-color: ${({ theme }) => theme.search.background};
  padding: 6px 36px 6px 20px;
  border-radius: 5px;
  height: ${inputHeight}px;
  width: 300px;
  transition: background-color 0.3s ease-in-out;

  &:focus {
    outline: none;
    background-color: ${({ theme }) => theme.search.focusBackground};
  }
`;

SearchInput.defaultProps = {
  theme: defaultTheme,
};

export const SearchContainer = styled.div`
  display: flex;
  position: relative;
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #FFFFFF;
  border-radius: 3px;
  width: 100%;
  left: 0;
  top: ${inputHeight + 5}px;
  position: absolute;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  z-index: 100;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  padding: 10px;
  cursor: pointer;
  border-bottom: 1px solid ${({ theme }) => theme.search.borderBottom};

  &:hover {
    background-color: ${({ theme }) => theme.search.itemHover};
    border-radius: ${({ theme }) => theme.search.borderRadius};
  }

  &:last-child {
    border-bottom: none;
  }
`;

Item.defaultProps = {
  theme: defaultTheme,
};

export const Poster = styled.img`
  width: 30px;
  max-width: 100%;
`;

export const Info = styled.div`
  display: flex;
  overflow: hidden;
  flex-direction: column;
  width: 210px;
  margin-left: 10px;
`;

export const ShowAllItem = styled.h1`
  user-select: none;
  font-family: 'Open Sans', sans-serif;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 2px;
  margin: 0;
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
`;

export const Title = styled.h1`
  font-family: 'Open Sans', sans-serif;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 2px;
  margin: 0;
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
`;

export const Overview = styled.p`
  font-family: 'Open Sans', sans-serif;
  margin: 0;
  font-size: 12px;
  font-weight: 300;
  line-height: 15px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const IconContainer = styled.div`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
`;

export const InputContainer = styled.div`
`;
