import React from 'react';
import PropTypes from 'prop-types';
import {
  SliderContainer,
  SliderInput,
  InputContainer,
  InputValue,
} from './styles';

const Slider = ({ value, onChange }) => (
  <SliderContainer>
    <div>
      <InputValue>
        {`>${value}`}
      </InputValue>
    </div>
    <InputContainer>
      <SliderInput
        type="range"
        min="1"
        max="10"
        step="0.1"
        value={value}
        onChange={onChange}
      />
    </InputContainer>
  </SliderContainer>
);

Slider.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Slider;
