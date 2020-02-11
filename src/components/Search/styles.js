import styled from 'styled-components';
import defaultTheme from '../../theme';

export const SearchInput = styled.input`
  border: 0;
  color: ${(props) => props.theme.main.gray};
  font-size: 15px;
  background-color: transparent;
  padding: 6px 15px;
  border: 1px solid #716F73;
  border-radius: 5px;

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

SearchWrapper.defaultProps = {
  theme: defaultTheme,
};

export const ListWrapper = styled.div`
  display: flex;
  flex: 0;
  margin-top: 5px;
  flex-direction: column;
  background-color: white;
  border-radius: 3px;
  position: absolute;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  width: 230px;
  padding: 10px;
  color: ${(props) => props.textColor};
  cursor: pointer;

  &:hover {
    background-color: #ddc753;
  }
`;

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
`;
