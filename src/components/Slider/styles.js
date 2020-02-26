import styled from 'styled-components';

const sliderHeigth = 100;
const circleSize = 12;

export const SliderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const SliderInput = styled.input`
  width: ${sliderHeigth}px;
  -webkit-appearance: none;
  width: 100%;
  height: 2px;
  background: ${({ theme }) => theme.slider.background};
  outline: none;
  z-index: 1;

  &::-webkit-slider-thumb {
    position: relative;
    z-index: 3;
    top: 0;
    -webkit-appearance: none;
    appearance: none;
    width: ${circleSize}px;
    height: ${circleSize}px;
    border-radius: 50%;
    box-shadow: 1px 1px 4px ${({ theme }) => theme.slider.boxShadow};
    background: ${({ theme }) => theme.slider.circle};
    cursor: pointer;
  }

  &::before {
    z-index: 0;
    content: '';
    display: inline-block;
    position: absolute;
    width: ${({ value }) => value * (sliderHeigth / 10)}px;
    height: 2px;
    background-color: ${({ theme }) => theme.slider.activeField};
  }
`;

export const InputValue = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-size: 15px;
  font-weight: 300;
  line-height: 15px;
  margin: 0;
`;
