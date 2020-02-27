import React from 'react';
import PropTypes from 'prop-types';
import {
  SliderContainer,
  SliderInput,
  InputContainer,
  InputValue,
} from './styles';

const Slider = ({
  value, onChange, min, max, step,
}) => (
    <SliderContainer>
      <div>
        <InputValue>
          {`>${value}`}
        </InputValue>
      </div>
      <InputContainer>
        <SliderInput
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={onChange}
        />
      </InputContainer>
    </SliderContainer>
  );

Slider.defaultProps = {
  min: '0',
  max: '10',
  step: '0.1',
};

Slider.propTypes = {
  min: PropTypes.string,
  max: PropTypes.string,
  step: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Slider;
