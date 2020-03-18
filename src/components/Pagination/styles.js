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
  background-color: ${({ theme, active }) => active && theme.header.activeLink};
  color: ${({ theme, active }) => active && theme.pagination.page};

  &:hover {
    background-color: ${({ theme, active }) => !active && theme.pagination.background};
    color: ${({ theme, active }) => !active && theme.pagination.page};
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  &:first-child {
    margin-bottom: 1%;
  }
`;
