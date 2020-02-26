import styled from 'styled-components';

const radioHeight = 16;
const radioWidth = 16;

export const RadioContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ItemContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 7px 15px;
`;

export const Label = styled.label`
  font-family: 'Open Sans', sans-serif;
  margin: 0;
  font-size: 15px;
  font-weight: 300;
  line-height: 15px;
  color: #666666;
`;

export const CircleContainer = styled.div`
  position: relative;
`;

export const RadioCircle = styled.label`
  position: absolute;
  width: ${radioWidth - 7}px;
  height: ${radioHeight - 7}px;
  background-color: #DDC753;
  border-radius: 50%;
  left: 50%;
  top: 42%;
  transform: translate(-50%, -50%);
`;

export const RadioInput = styled.input`
  position: relative;
  appearance: none;
  width: ${radioWidth}px;
  height: ${radioHeight}px;
  border: 1px solid #B4B4B4;
  border-radius: 50%;
  cursor: pointer;
  &:checked {
    border: 1px solid #DDC753;
    background-color: #FFFFFF;
  }
  &:focus {
    outline: none;
  }
`;
