import styled from 'styled-components';
import defaultTheme from '../../theme';

const inputHeight = 31;

export const SearchInput = styled.input`
  border: 0;
  color: ${({ theme: { header: { colors } } }) => colors.lightGray};
  font-size: 15px;
  background-color: transparent;
  padding: 6px 15px;
  border: 1px solid #716F73;
  border-radius: 5px;
  height: ${inputHeight}px;
  width: 100%;

  &:focus {
    outline: none;
    background-color: white;
  }
`;

SearchInput.defaultProps = {
  theme: defaultTheme,
};

export const SearchWrapper = styled.div`
  display: flex;
  width: 220px;
  position: relative;
`;

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 3px;
  width: 100%;
  left: 0;
  top: ${inputHeight + 5}px;
  position: absolute;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  padding: 10px;
  color: ${(props) => props.textColor};
  cursor: pointer;
  border-bottom: 1px solid ${({ theme: { search: { colors } } }) => colors.borderBottom};

  &:hover {
    background-color: ${({ theme: { search: { colors } } }) => colors.itemHover};
    border-radius: ${({ theme: { search } }) => search.borderRadius};
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
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  margin-right: 5px;
`;

export const InputContainer = styled.div`
`;