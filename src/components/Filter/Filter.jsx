import React from 'react';
import FilterIcon from '../Icons/FilterIcon';
import SortBy from '../Icons/SortBy';
import Radio from '../Radio';
import {
  SortContainer,
  ListContainer,
  LabelContainer,
  Label,
} from './styles';

const SortFilter = () => (
  <>
    <FilterIcon />
    <SortContainer>
      <ListContainer>
        <LabelContainer>
          <Label>Sort by</Label>
          <SortBy />
        </LabelContainer>
        <Radio />
      </ListContainer>
    </SortContainer>
  </>
);

export default SortFilter;
