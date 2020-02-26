import React from 'react';
import PropTypes from 'prop-types';
import {
  RadioContainer,
  RadioInput,
  ItemContainer,
  Label,
} from './styles';

const RadioGroup = ({ data, value, onChange }) => {
  const handleChange = (val) => () => {
    onChange(val);
  };

  return (
    <RadioContainer>
      {data.map((params) => (
        <ItemContainer>
          <RadioInput
            type="radio"
            name="filter"
            onChange={handleChange(params.value)}
            checked={params.value === value}
          />
          <Label>{params.title}</Label>
        </ItemContainer>
      ))}
    </RadioContainer>
  );
};

RadioGroup.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default RadioGroup;
