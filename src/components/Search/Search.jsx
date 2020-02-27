import React, { useState, useEffect, useRef } from 'react';
import SearchIcon from '../Icons/SearchIcon';
import moviesAPI from '../../api/movies';
import List from './List';
import useDebounce from '../../hooks/useDebounce';
import useOutsideClick from '../../hooks/useOutsideClick';
import { SEARCH_PARAMS, EVENT_TYPE } from '../../constants';
import {
  SearchContainer,
  SearchInput,
  IconContainer,
  InputContainer,
} from './styles';

const Search = () => {
  const [value, setValue] = useState('');
  const [data, setData] = useState([]);
  const debouncedValue = useDebounce(value, 200);

  const wrapperRef = useRef(null);
  useOutsideClick(wrapperRef, () => setData([]), EVENT_TYPE.MOUSEDOWN);

  useEffect(() => {
    if (value && value.trim().length >= 2) {
      moviesAPI.get({
        title: value,
        page: SEARCH_PARAMS.REQUEST_PAGE,
        perPage: SEARCH_PARAMS.REQUEST_PER_PAGE,
      }).then(({ movies }) => setData(movies));
    } else {
      setData([]);
    }
  }, [debouncedValue]);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const onItemClick = () => {
    setData([]);
    setValue('');
  };

  return (
    <SearchContainer ref={wrapperRef}>
      <InputContainer>
        <SearchInput
          placeholder="Type to search…"
          onChange={handleChange}
          value={value}
        />
        <IconContainer>
          <SearchIcon />
        </IconContainer>
      </InputContainer>
      {(data.length > 0)
        && (
          <List
            onItemClick={onItemClick}
            value={value}
            movies={data}
          />
        )}
    </SearchContainer>
  );
};

export default Search;
