import React, { useState } from 'react';
import { SliderContainer, SliderInput, InputValue } from './styles';

const Slider = () => {
  const [value, setValue] = useState(0);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
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
          onChange={(e) => handleChange(e)}
        />
      </div>
    </SliderContainer>
  );
};

export default Slider;
