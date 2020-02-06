import styled from 'styled-components';

export const HeaderTab = styled.button`
  border: none;
  background: none;
  color: #f2f2f2;
  ${({ index, value }) =>
    (index === value
      ? 'color: orange;'
      : '')}
  :focus {
    { outline: none }
  }
`;
