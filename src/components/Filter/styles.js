import styled from 'styled-components';

export const FilterContainer = styled.div`
  position: relative;
`;

export const SortContainer = styled.div`
  background-color: #FFFFFF;
  border: 1px solid rgba(60, 60, 60, 0.1);
  border-radius: 5px;
  width: 270px;
`;

export const ListContainer = styled.div`
  border-top: 1px solid rgba(60, 60, 60, 0.1);
  :first-child {
    border-top: none;
  }
`;

export const LabelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 7px;
  border-bottom: 1px solid rgba(60, 60, 60, 0.1);
  :last-child {
    border-bottom: none;
  }
`;

export const Label = styled.h1`
  font-family: 'Open Sans', sans-serif;
  margin: 0;
  font-size: 15px;
  font-weight: 600;
  line-height: 15px;
`;
