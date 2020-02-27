import React, { useReducer } from 'react';
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

const reducer = (currentState, newState) => ({ ...currentState, ...newState });

const SortFilter = () => {
  const [{
    sort, year, rating, open,
  }, setState] = useReducer(reducer, {
    sort: SORT_FILTERS[0].value,
    year: '1998',
    rating: 0,
    open: true,
  });

  const handleYearChange = (event) => {
    setState({ year: event.target.value });
  };

  const handleRatingChange = (event) => {
    setState({ rating: event.target.value });
  };

  const applyFilters = () => {
    setState({ open: false });
  };

  const resetFilters = () => {
    setState({
      sort: SORT_FILTERS[0].value,
      year: '1998',
      rating: 0,
      open: false,
    });
  };

  const openFilterContainer = () => {
    setState({ open: !open });
  };

  const setSort = (val) => {
    setState({ sort: val });
  };

  return (
    <FilterContainer>
      <IconContainer onClick={openFilterContainer}>
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
              <Slider
                value={rating}
                onChange={handleRatingChange}
              />
            </LabelContainer>
          </ListContainer>
          <ListContainer>
            <LabelContainer>
              <Label>Year</Label>
              <TextField
                value={year}
                onChange={handleYearChange}
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
