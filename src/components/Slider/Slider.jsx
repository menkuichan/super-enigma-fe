import React from 'react';
import PropTypes from 'prop-types';
import { SliderContainer, SliderInput, InputValue } from './styles';

const Slider = ({ value, onChange }) => (
  <SliderContainer>
    <div>
      <InputValue>
        {value}
      </InputValue>
    </div>
    <div>
      <SliderInput
        type="range"
        min="1"
        max="10"
        step="0.1"
        value={value}
        onChange={onChange}
      />
    </div>
  </SliderContainer>
);

Slider.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Slider;
