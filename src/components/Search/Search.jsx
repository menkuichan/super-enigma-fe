import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import SearchIcon from '../Icons/SearchIcon';
import moviesAPI from '../../api/movies';
import List from './List';
import useDebounce from '../../hooks/useDebounce';
import useOutsideClick from '../../hooks/useOutsideClick';
import { SEARCH_PARAMS, EVENT_TYPE, ENTER_KEY } from '../../constants';
import {
  SearchContainer,
  SearchInput,
  IconContainer,
  InputContainer,
} from './styles';

const Search = () => {
  const [value, setValue] = useState('');
  const [data, setData] = useState([]);
  const history = useHistory();
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

  const searchMovies = (e) => {
    if ((e.charCode === ENTER_KEY || e.type === 'click') && value.trim().length >= 2) {
      history.push(`/movies?title=${value}`);
      setData([]);
    }
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
          onKeyPress={searchMovies}
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
            showAll={searchMovies}
            value={value}
            movies={data}
          />
        )}
    </SearchContainer>
  );
};

export default Search;
