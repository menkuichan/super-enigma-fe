import styled from 'styled-components';
import defaultTheme from '../../theme';

export const Input = styled.input`
  font-family: 'Open Sans', sans-serif;
  border: 0;
  color: ${({ theme }) => theme.input.text};
  font-size: 14px;
  background-color: ${({ theme }) => theme.input.background};
  padding: 5px 7px;
  border-radius: 5px;
  width: 50px;

  &:focus {
    outline: none;
  }
`;

Input.defaultProps = {
  theme: defaultTheme,
};
