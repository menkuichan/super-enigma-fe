import React, { useState } from 'react';
import FilterIcon from '../Icons/FilterIcon';
import SortBy from '../Icons/SortBy';
import RadioGroup from '../RadioGroup';
import Button from '../Button';
import { SORT_FILTERS } from '../../constants';
import TextField from '../TextField';
import Slider from '../Slider';
import {
  FilterContainer,
  SortContainer,
  ListContainer,
  LabelContainer,
  Label,
  IconContainer,
} from './styles';
import { SliderInput } from '../Slider/styles';

const SortFilter = () => {
  const [open, setOpen] = useState(true);
  const [filter, setFilter] = useState({});
  const [sort, setSort] = useState(SORT_FILTERS[0].value);
  const [value, setValue] = useState('1998');

  const onHandleChange = (event) => {
    setValue(event.target.value);
  };

  const applyFilters = () => {
    setFilter({
      sortBy: sort,
      yaer: value,
    });
  };

  const resetFilters = () => {
    setFilter({});
  };

  return (
    <FilterContainer>
      <IconContainer onClick={() => setOpen(!open)}>
        <FilterIcon />
      </IconContainer>
      {open && (
        <SortContainer>
          <ListContainer>
            <LabelContainer>
              <Label>Sort by</Label>
              <SortBy />
            </LabelContainer>
            <RadioGroup
              data={SORT_FILTERS}
              value={sort}
              onChange={setSort}
            />
          </ListContainer>
          <ListContainer>
            <LabelContainer>
              <Label>Rating</Label>
              <Slider />
            </LabelContainer>
          </ListContainer>
          <ListContainer>
            <LabelContainer>
              <Label>Year</Label>
              <TextField
                value={value}
                onChange={onHandleChange}
              />
            </LabelContainer>
          </ListContainer>
          <ListContainer>
            <LabelContainer>
              <Button
                label="Reset"
                onClick={resetFilters}
              />
              <Button
                label="Apply"
                type="secondary"
                onClick={applyFilters}
              />
            </LabelContainer>
          </ListContainer>
        </SortContainer>
      )}
    </FilterContainer>
  );
};

export default SortFilter;
