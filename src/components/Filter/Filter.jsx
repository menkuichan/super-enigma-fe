import React, { useReducer } from 'react';
import FilterIcon from '../Icons/FilterIcon';
import SortBy from '../Icons/SortBy';
import Hover from '../Icons/Hover';
import RadioGroup from '../RadioGroup';
import Button from '../Button';
import { SORT_FILTERS } from '../../constants';
import TextField from '../TextField';
import Slider from '../Slider';
import Tag from '../Tag';
import {
  FilterContainer,
  SortContainer,
  ListContainer,
  LabelContainer,
  Label,
  IconContainer,
  GenresContainer,
} from './styles';

const reducer = (currentState, newState) => (
  { ...currentState, ...newState }
);

const initialState = {
  sort: SORT_FILTERS[0].value,
  direction: 'asc',
  year: '1998',
  rating: '0',
  open: true,
};

const SortFilter = () => {
  const [{ sort, year, rating, open, direction }, setState] = useReducer(reducer, initialState); // eslint-disable-line

  const handleYearChange = (event) => {
    setState({ year: event.target.value });
  };

  const handleRatingChange = (event) => {
    setState({ rating: event.target.value });
  };

  const applyFilters = () => {
    setState({ open: false });
  };

  const changeDirection = () => {
    const newDirection = direction === 'asc' ? 'desc' : 'asc';
    setState({ direction: newDirection });
  };

  const resetFilters = () => {
    setState(initialState);
  };

  const openFilterContainer = () => {
    setState({ open: !open });
  };

  const setSort = (value) => {
    setState({ sort: value });
  };

  const genres = ['adventure'];

  return (
    <FilterContainer>
      <IconContainer onClick={openFilterContainer}>
        <FilterIcon />
      </IconContainer>
      {open && (
        <SortContainer>
          <ListContainer>
            <LabelContainer>
              <Label>Genres</Label>
              <Hover />
            </LabelContainer>
            <GenresContainer>
              <Tag label="adventure" genres={genres} />
              <Tag label="horror" genres={genres} />
            </GenresContainer>
          </ListContainer>
          <ListContainer>
            <LabelContainer>
              <Label>Sort by</Label>
              <SortBy onClick={changeDirection} direction={direction} />
            </LabelContainer>
            <RadioGroup
              data={SORT_FILTERS}
              value={sort}
              onChange={setSort}
              direction={direction}
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
