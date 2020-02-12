import styled from 'styled-components';

export const LinkButton = styled.button`
  border: 0;
  background: none;
  font-size: 15px;
  padding: 20px 30px;
  color: ${({ index, value, theme: { header: { colors } } }) => (index === value ? colors.orange : colors.lightGray)};

  &:focus {
    outline: none
  }
`;
