import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { selectSearchMovies } from '../../store/reducers/search';
import List from './List';
import useDebounce from '../../hooks/useDebounce';
import useOutsideClick from '../../hooks/useOutsideClick';
import { SEARCH_MOVIES_PENDING, CLEAR_SEARCH_MOVIES } from '../../store/actionTypes';
import { EVENT_TYPE, ENTER_KEY } from '../../constants';
import {
  SearchContainer,
  SearchInput,
  IconContainer,
  InputContainer,
  SearchIcon,
} from './styles';

const Search = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  const history = useHistory();
  const movies = useSelector(selectSearchMovies);
  const debouncedValue = useDebounce(value, 200);
  const wrapperRef = useRef(null);
  useOutsideClick(wrapperRef, () => {
    if (value) {
      dispatch({
        type: CLEAR_SEARCH_MOVIES,
      });
    }
  }, EVENT_TYPE.MOUSEDOWN);

  useEffect(() => {
    if (value && value.trim().length >= 2) {
      dispatch({
        type: SEARCH_MOVIES_PENDING,
        payload: {
          title: value,
        },
      });
    } else {
      dispatch({
        type: CLEAR_SEARCH_MOVIES,
      });
    }
  }, [debouncedValue]);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const searchMovies = (e) => {
    if ((e.charCode === ENTER_KEY || e.type === 'click') && value.trim().length >= 2) {
      history.push(`/movies?title=${value}`);
      dispatch({
        type: CLEAR_SEARCH_MOVIES,
      });
    }
  };

  const onItemClick = () => {
    dispatch({
      type: CLEAR_SEARCH_MOVIES,
    });
    setValue('');
  };

  return (
    <SearchContainer ref={wrapperRef}>
      <InputContainer>
        <SearchInput
          placeholder="Type to search…"
          onChange={handleChange}
          onKeyPress={searchMovies}
          value={value}
        />
        <IconContainer>
          <SearchIcon />
        </IconContainer>
      </InputContainer>
      {(movies.length > 0)
        && (
          <List
            onItemClick={onItemClick}
            showAll={searchMovies}
            value={value}
            movies={movies}
          />
        )}
    </SearchContainer>
  );
};

export default Search;
