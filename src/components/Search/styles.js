import styled from 'styled-components';
import defaultTheme from '../../theme';

export const SearchInput = styled.input`
  border: 0;
  color: ${(props) => props.theme.main.gray};
  font-size: 15px;
  background-color: transparent;

  &:focus {
    outline: none;
  }
`;

SearchInput.defaultProps = {
  theme: defaultTheme,
};

export const SearchWrapper = styled.div`
  display: flex;
  width: 220px;
  background-color: ${(props) => props.theme.main.color};
  padding: 6px 15px;
  border: 1px solid #716F73;
  border-radius: 5px;
`;

SearchWrapper.defaultProps = {
  theme: defaultTheme,
};

export const Item = styled.div`
  flex-direction: row;
  height: 25px;
  width: 220px;
  padding: 6px 15px;
  padding: 6px 15px;
`;

export const ListWrapper = styled.div`
  flex-direction: row;
  background-color: whitesmoke;
  border-radius: 3px;
`;

export const Poster = styled.img`
`;
