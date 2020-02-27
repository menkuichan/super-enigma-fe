import styled from 'styled-components';
import defaultTheme from '../../theme';

export const TagContainer = styled.div`
  display: inline-block;
  border: 1px solid ${({ genres, label, theme }) => (genres.find((genre) => genre === label) ? theme.tag.active : theme.tag.border)};
  background-color: ${({ genres, label, theme }) => (genres.find((genre) => genre === label) ? theme.tag.active : theme.tag.background)};
  border-radius: 50px;
  padding: 3px 9px;
  margin: 3px;
  cursor: pointer;
`;

TagContainer.defaultProps = {
  theme: defaultTheme,
};

export const TagLabel = styled.p`
  font-family: 'Open Sans', sans-serif;
  margin: 0;
  font-size: 12px;
  font-weight: 600;
  line-height: 15px;
  user-select: none;
`;
