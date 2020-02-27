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

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_FILTER':
      return {
        ...state,
        open: false,
      };
    case 'RESET_FILTER':
      return {
        ...state,
        filter: {
          ...state.filter,
          sort: SORT_FILTERS[0].value,
          year: '1998',
        },
        open: false,
      };
    case 'SET_YEAR':
      return {
        ...state,
        filter: {
          ...state.filter,
          year: action.value,
        },
      };
    case 'SET_RATING':
      return {
        ...state,
        filter: {
          ...state.filter,
          rating: action.rating,
        },
      };
    case 'SET_OPEN':
      return {
        ...state,
        open: !state.open,
      };
    case 'SET_SORT':
      return {
        ...state,
        filter: {
          ...state.filter,
          sort: action.sort,
        },
      };
    default:
      return state;
  }
};

const SortFilter = () => {
  const [{ filter, open }, dispatch] = useReducer(reducer, {
    filter: {
      sort: SORT_FILTERS[0].value,
      year: '1998',
      rating: 0,
    },
    open: true,
  });

  const handleYearChange = (event) => {
    dispatch({ type: 'SET_YEAR', value: event.target.value });
  };

  const handleRatingChange = (event) => {
    dispatch({ type: 'SET_RATING', rating: event.target.value });
  };

  const applyFilters = () => {
    dispatch({ type: 'SET_FILTER' });
  };

  const resetFilters = () => {
    dispatch({ type: 'RESET_FILTER' });
  };

  const openFilterContainer = () => {
    dispatch({ type: 'SET_OPEN' });
  };

  const setSort = (val) => {
    dispatch({ type: 'SET_SORT', sort: val });
  };
  console.log(filter);

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
              value={filter.sort}
              onChange={setSort}
            />
          </ListContainer>
          <ListContainer>
            <LabelContainer>
              <Label>Rating</Label>
              <Slider
                value={filter.rating}
                onChange={handleRatingChange}
              />
            </LabelContainer>
          </ListContainer>
          <ListContainer>
            <LabelContainer>
              <Label>Year</Label>
              <TextField
                value={filter.year}
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
