import styled from 'styled-components';

export const Link = styled.button`
  border: none;
  background: none;
  font-size: 15px;
  padding: 20px 30px;
  color: ${({ index, value, theme }) => (index === value ? theme.main.orange : theme.main.gray)};
  :focus {
    outline: none
  }
`;
