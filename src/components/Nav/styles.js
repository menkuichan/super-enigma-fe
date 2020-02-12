import styled from 'styled-components';

export const LinkButton = styled.button`
  border: 0;
  background: none;
  font-size: 15px;
  padding: 20px 30px;
  color: ${({ index, value, theme: { header } }) => (index === value ? header.activeLink : header.text)};

  &:focus {
    outline: none
  }
`;
