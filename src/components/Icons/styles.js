import styled from 'styled-components';

export const Icon = styled.svg`
  display: block;
`;

export const SortIcon = styled.svg`
  ${({ direction }) => direction === 'desc' && 'transform: scaleY(-1);'}
`;
