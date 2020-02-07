import styled from 'styled-components';

export const SearchInput = styled.input`
  border: none;
  width: 200px;
  color: ${(props) => props.theme.main.gray};
  font-size: 15px;
  background-color: ${(props) => props.theme.main.color};;

  &:focus {
  outline: none;
}
`;

export const SearchWrapper = styled.div`
display: flex;
padding: 6px 15px;
border: 1.5px solid #716F73;
border-radius: 5px;
`;
