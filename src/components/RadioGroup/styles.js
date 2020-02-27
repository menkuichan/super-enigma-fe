import styled from 'styled-components';
import defaultTheme from '../../theme';

const radioHeight = 16;
const radioWidth = 16;
const circleWidth = radioWidth - 7;
const circleHeight = radioHeight - 7;

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
  color: ${({ theme }) => theme.radio.label};
  cursor: pointer;
`;

Label.defaultProps = {
  theme: defaultTheme,
};

export const CircleContainer = styled.div`
  position: relative;
`;

export const RadioCircle = styled.label`
  position: absolute;
  width: ${circleWidth}px;
  height: ${circleHeight}px;
  background-color: ${({ theme }) => theme.radio.input};
  border-radius: 50%;
  left: 50%;
  top: 42%;
  transform: translate(-50%, -50%);
`;

RadioCircle.defaultProps = {
  theme: defaultTheme,
};

export const RadioInput = styled.input`
  position: relative;
  appearance: none;
  width: ${radioWidth}px;
  height: ${radioHeight}px;
  border: 1px solid ${({ theme }) => theme.radio.border};
  border-radius: 50%;
  cursor: pointer;

  &:checked {
    border: 1px solid ${({ theme }) => theme.radio.input};
    background-color: ${({ theme }) => theme.radio.background};
  }

  &:focus {
    outline: none;
  }
`;

RadioInput.defaultProps = {
  theme: defaultTheme,
};
