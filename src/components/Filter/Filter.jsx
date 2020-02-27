import React, { useReducer, useRef } from 'react';
import useOutsideClick from '../../hooks/useOutsideClick';
import FilterIcon from '../Icons/FilterIcon';
import SortBy from '../Icons/SortBy';
import Hover from '../Icons/Hover';
import RadioGroup from '../RadioGroup';
import Button from '../Button';
import { SORT_FILTERS, EVENT_TYPE } from '../../constants';
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
  genres: ['Adventure', 'Crime'],
};

const SortFilter = () => {
  const [{ sort, year, rating, open, direction, genres }, setState] = useReducer(reducer, initialState); // eslint-disable-line

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

  const setGenre = (genreName) => {
    const newGenres = genres;
    if (genres.find((el) => el === genreName)) {
      genres.forEach((element, index) => {
        if (element === genreName) {
          newGenres.splice(index, 1);
        }
      });
    } else {
      genres.push(genreName);
    }
    setState({ genres: newGenres });
  };

  const wrapperRef = useRef(null);
  useOutsideClick(wrapperRef, () => setState({ open: false }), EVENT_TYPE.MOUSEDOWN);
  const handleYearChange = (event) => {
    setState({ year: event.target.value });
  };

  return (
    <FilterContainer ref={wrapperRef}>
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
              <Tag label="Adventure" genres={genres} onClick={setGenre} />
              <Tag label="Horror" genres={genres} onClick={setGenre} />
              <Tag label="Crime" genres={genres} onClick={setGenre} />
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
