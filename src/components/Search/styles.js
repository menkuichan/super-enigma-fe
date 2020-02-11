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

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: whitesmoke;
  border-radius: 3px;
  position: absolute;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 230px;
  padding: 10px;
  color: ${(props) => props.textColor};
`;

export const Poster = styled.img`
  width: 33px;
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 210px;
  margin-left: 10px;
`;

export const Description = styled.div`
  font-family: Open Sans;
  font-size: ${(props) => props.textSize};
  font-weight: ${(props) => props.fontWeight};
`;
