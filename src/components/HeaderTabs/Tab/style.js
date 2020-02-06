import styled from 'styled-components';

export const HeaderTab = styled.button`
  border: none;
  background: none;
  font-size: 15px;
  padding: 20px 30px;
  color: ${({ index, value }) => (index === value ? '#f79b0e' : '#f2f2f2')};
  :focus {
    { outline: none }
  }
`;
