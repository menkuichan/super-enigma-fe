import React, { useReducer, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import queryString from 'query-string';
import { selectGenres, selectLoading } from '../../store/reducers/genres';
import useOutsideClick from '../../hooks/useOutsideClick';
import ArrowDown from '../Icons/ArrowDown';
import RadioGroup from '../RadioGroup';
import Button from '../Button';
import { GET_GENRES_PENDING } from '../../store/actionTypes';
import { EVENT_TYPE } from '../../constants';
import TextField from '../TextField';
import Slider from '../Slider';
import Tag from '../Tag';
import Spinner from '../Spinner';
import {
  FilterContainer,
  SortContainer,
  ListContainer,
  LabelContainer,
  Label,
  IconContainer,
  GenresContainer,
  SpinnerContainer,
  Trending,
  SortBy,
} from './styles';

const reducer = (currentState, newState) => (
  { ...currentState, ...newState }
);

const initialState = {
  sort: 'popularity',
  direction: 'desc',
  year: '',
  rating: '0',
  open: false,
  activeTags: [],
};

const SortFilter = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const genres = useSelector(selectGenres);
  const isLoading = useSelector(selectLoading);
  const [{ sort, year, rating, open, direction, activeTags }, setState] = useReducer(reducer, initialState); // eslint-disable-line
  const wrapperRef = useRef(null);
  useOutsideClick(wrapperRef, () => setState(initialState), EVENT_TYPE.MOUSEDOWN);
  const { t } = useTranslation();

  const sortFilters = [
    {
      title: t('filter.sortBy.popularity'),
      value: 'popularity',
    },
    {
      title: t('filter.sortBy.releaseDate'),
      value: 'release_date',
    },
    {
      title: t('filter.sortBy.originalTitle'),
      value: 'original_title',
    },
    {
      title: t('filter.sortBy.voteAverage'),
      value: 'vote_average',
    },
    {
      title: t('filter.sortBy.voteCount'),
      value: 'vote_count',
    },
  ];

  const handleRatingChange = (event) => {
    setState({ rating: event.target.value });
  };

  const applyFilters = () => {
    const query = queryString.stringify({
      sortBy: `${sort}.${direction}`,
      year,
      vote_average: rating,
      genre: activeTags,
    },
    {
      sort: false,
      arrayFormat: 'comma',
    });

    history.push(`/movies?${query}`);
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
    dispatch({ type: GET_GENRES_PENDING });
  };

  const setSort = (value) => {
    setState({ sort: value });
  };

  const setGenre = (tagId) => {
    if (activeTags.includes(tagId)) {
      setState({ activeTags: activeTags.filter((id) => id !== tagId) });
    } else {
      setState({ activeTags: [...activeTags, tagId] });
    }
  };

  const handleYearChange = (event) => {
    setState({ year: event.target.value });
  };

  return (
    <FilterContainer ref={wrapperRef}>
      <IconContainer onClick={openFilterContainer}>
        <Trending />
      </IconContainer>
      {open && (
        <SortContainer>
          <ListContainer>
            <LabelContainer>
              <Label>{t('filter.genres')}</Label>
              <ArrowDown />
            </LabelContainer>
            {isLoading ? <SpinnerContainer><Spinner width="20" /></SpinnerContainer> : (
              <GenresContainer>
                {genres.map((genre) => (
                  <Tag
                    key={genre.id}
                    label={genre.name}
                    active={activeTags.includes(genre.id)}
                    onClick={setGenre}
                    id={genre.id}
                  />
                ))}
              </GenresContainer>
            )}
          </ListContainer>
          <ListContainer>
            <LabelContainer>
              <Label>{t('filter.sortBy.label')}</Label>
              <SortBy onClick={changeDirection} direction={direction} />
            </LabelContainer>
            <RadioGroup
              data={sortFilters}
              value={sort}
              onChange={setSort}
              direction={direction}
            />
          </ListContainer>
          <ListContainer>
            <LabelContainer>
              <Label>{t('filter.rating')}</Label>
              <Slider
                value={rating}
                onChange={handleRatingChange}
              />
            </LabelContainer>
          </ListContainer>
          <ListContainer>
            <LabelContainer>
              <Label>{t('filter.year')}</Label>
              <TextField
                placeholder="_ _ _ _"
                value={year}
                onChange={handleYearChange}
              />
            </LabelContainer>
          </ListContainer>
          <ListContainer>
            <LabelContainer>
              <Button
                label={t('filter.reset')}
                onClick={resetFilters}
              />
              <Button
                label={t('filter.apply')}
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
