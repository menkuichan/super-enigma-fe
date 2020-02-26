import styled from 'styled-components';
import defaultTheme from '../../theme';

export const SimpleButton = styled.button`
  font-family: 'Open Sans', sans-serif;
  font-size: 15px;
  font-weight: 600;
  line-height: 15px;
  color: ${({ type, theme }) => (type === 'primary' ? theme.button.primary : theme.button.secondary)};
  border: none;
  padding: 0;
  background-color: inherit;
  cursor: pointer;
`;

SimpleButton.defaultProps = {
  theme: defaultTheme,
};
