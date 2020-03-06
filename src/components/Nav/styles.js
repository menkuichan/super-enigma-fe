import styled from 'styled-components';

export const LinkButton = styled.button`
  cursor: pointer;
  font-family: 'Open Sans', sans-serif;
  border: 0;
  background: none;
  font-size: 15px;
  padding: 20px 30px;
  color: ${({ filter, value, theme }) => (filter === value ? theme.header.activeLink : theme.header.text)};
  &:focus {
    outline: none
  }

  &:hover {
    color: ${({ theme }) => theme.header.activeLink}
  }
`;
