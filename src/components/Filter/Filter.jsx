import React, { useState } from 'react';
import FilterIcon from '../Icons/FilterIcon';
import SortBy from '../Icons/SortBy';
import RadioGroup from '../RadioGroup';
import Button from '../Button';
import { SORT_FILTERS } from '../../constants';
import {
  FilterContainer,
  SortContainer,
  ListContainer,
  LabelContainer,
  Label,
} from './styles';

const SortFilter = () => {
  const [filter, setFilter] = useState({});
  const [sort, setSort] = useState(SORT_FILTERS[0].value);
  return (
    <FilterContainer>
      <FilterIcon />
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
            <Button label="Reset" />
            <Button label="Apply" type="secondary" />
          </LabelContainer>
        </ListContainer>
      </SortContainer>
    </FilterContainer>
  );
};

export default SortFilter;
