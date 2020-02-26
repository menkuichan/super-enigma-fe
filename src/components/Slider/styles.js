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
  background: #DADADA;
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
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.25);
    background: #666666;
    cursor: pointer;
  }

  &::before {
    z-index: 0;
    content: '';
    display: inline-block;
    position: absolute;
    width: ${({ value }) => value * (sliderHeigth / 10) - circleSize}px;
    height: 2px;
    background-color: #DDC753;
  }
`;

export const InputValue = styled.p`
  font-size: 15px;
  font-weight: 300;
  line-height: 15px;
  margin: 0;
`;
