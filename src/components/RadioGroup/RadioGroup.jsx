import React from 'react';
import PropTypes from 'prop-types';
import {
  RadioContainer,
  RadioInput,
  ItemContainer,
  Label,
  RadioCircle,
  CircleContainer,
} from './styles';

const RadioGroup = ({ data, value, onChange }) => {
  const handleChange = (val) => () => {
    onChange(val);
  };

  return (
    <RadioContainer>
      {data.map((params, index) => (
        <ItemContainer
          key={index} // eslint-disable-line
        >
          <Label htmlFor={index}>{params.title}</Label>
          <CircleContainer>
            <RadioInput
              id={index}
              type="radio"
              name="filter"
              onChange={handleChange(params.value)}
              checked={params.value === value}
            />
            {params.value === value && <RadioCircle />}
          </CircleContainer>
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
