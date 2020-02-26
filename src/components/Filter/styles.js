import styled from 'styled-components';

export const FilterContainer = styled.div`
  position: relative;
`;

export const IconContainer = styled.div`
  position: absolute;
  transform: translateY(-50%);
`;

export const SortContainer = styled.div`
  position: absolute;
  top: 27px;
  /* transform: translateX(-47%); */
  background-color: #FFFFFF;
  border: 1px solid rgba(60, 60, 60, 0.1);
  border-radius: 5px;
  width: 270px;

  &::before {
    content: '';
    display: inline-block;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: -7px;
    display: inline-block;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 5px 7px 5px;
    border-color: transparent transparent #FFFFFF transparent;
  }
`;

export const ListContainer = styled.div`
  border-top: 1px solid rgba(60, 60, 60, 0.1);

  &:first-child {
    border-top: none;
  }
`;

export const LabelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid rgba(60, 60, 60, 0.1);

  &:last-child {
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
