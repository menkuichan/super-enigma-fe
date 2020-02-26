import React from 'react';
import FilterIcon from '../Icons/FilterIcon';
import SortBy from '../Icons/SortBy';
import RadioGroup from '../RadioGroup';
import { SORT_FILTERS } from '../../constants';
import {
  FilterContainer,
  SortContainer,
  ListContainer,
  LabelContainer,
  Label,
} from './styles';

const SortFilter = () => (
  <FilterContainer>
    <FilterIcon />
    <SortContainer>
      <ListContainer>
        <LabelContainer>
          <Label>Sort by</Label>
          <SortBy />
        </LabelContainer>
        <RadioGroup data={SORT_FILTERS} />
      </ListContainer>
    </SortContainer>
  </FilterContainer>
);

export default SortFilter;
