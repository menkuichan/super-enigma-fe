import React from 'react';
import { SORT_FILTERS } from '../../constants';
import {
  RadioContainer,
  ItemContainer,
  Label,
  RadioInput,
  InputContainer,
} from './styles';

const Radio = () => (
  <RadioContainer>
    {SORT_FILTERS
      .map((filter) => (
        <ItemContainer>
          <Label>
            {filter.title}
          </Label>
          <InputContainer>
            <RadioInput type="radio" name="filter" checked />
          </InputContainer>
        </ItemContainer>
      ))}
  </RadioContainer>
);

export default Radio;
