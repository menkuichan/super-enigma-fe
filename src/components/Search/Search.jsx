import React, { useState, useEffect, useRef } from 'react';
import SearchIcon from '../Icons/SearchIcon';
import moviesAPI from '../../api/movies';
import List from './List';
import useDebounce from '../../hooks/useDebounce';
import useOutsideClick from '../../hooks/useOutsideClick';
import { SEARCH_PARAMS } from '../../constants';
import {
  SearchWrapper, SearchInput, IconContainer, InputContainer,
} from './styles';

const Search = () => {
  const [value, setValue] = useState('');
  const [data, setData] = useState([]);
  const [isListOpen, setListOpen] = useState(false);
  const debouncedValue = useDebounce(value, 1000);

  const wrapperRef = useRef(null);
  useOutsideClick(wrapperRef, () => setListOpen(false));

  useEffect(() => {
    if (value && value.trim().length >= 2) {
      moviesAPI.get({
        title: value,
        page: SEARCH_PARAMS.REQUEST_PAGE,
        perPage: SEARCH_PARAMS.REQUEST_PER_PAGE,
      }).then(({ movies }) => setData(movies));
      setListOpen(true);
    } else {
      setData([]);
    }
  }, [debouncedValue]);

  const onHandleChange = (event) => {
    const { value: currValue } = event.target;
    setValue(currValue);
  };

  return (
    <SearchWrapper ref={wrapperRef}>
      <InputContainer>
        <SearchInput
          placeholder="Type to search…"
          onChange={onHandleChange}
          value={value}
        />
        <IconContainer>
          <SearchIcon />
        </IconContainer>
      </InputContainer>
      {(data.length > 0 && isListOpen) && <List value={value} movies={data} />}
    </SearchWrapper>
  );
};

export default Search;
