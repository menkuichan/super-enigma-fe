import styled from 'styled-components';

export const PageNumber = styled.span`
  cursor: pointer;
  user-select: none;
  font-family: 'Open Sans', sans-serif;
  font-size: 12px;
  font-weight: 500;
  padding: 9px 16px;
  color: ${({ theme }) => theme.movies.text};
  transition: background-color .3s;
  border-radius: 5px;

  &.p${({ page }) => page} {
    background-color: ${({ theme }) => theme.header.activeLink};
    color: ${({ theme }) => theme.pagination.page};
  }

  &:hover:not(.p${({ page }) => page}) {
    border-radius: 5px;
    background-color: rgba(221, 221, 221, 0.4);
    color: ${({ theme }) => theme.pagination.page};
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  flex-direction: row;

  &:last-child {
    margin-bottom: 30px;
  }
`;
