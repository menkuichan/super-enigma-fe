import styled from 'styled-components';

export const RadioContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 7px;
`;

export const Label = styled.p`
  font-family: 'Open Sans', sans-serif;
  margin: 0;
  font-size: 15px;
  font-weight: 300;
  line-height: 15px;
  color: #666666;
`;

export const InputContainer = styled.div`
`;

export const RadioInput = styled.input`
  appearance: none;
  width: 16px;
  height: 16px;
  border: 1px solid #B4B4B4;
  border-radius: 50%;
  :checked {
    background-color: #DDC753;
  }
`;
