import React, { useState } from 'react';
import SearchIcon from '../Icons/SearchIcon';
import moviesAPI from '../../api/movies';
import List from './List';
import { SEARCH_PARAMS } from '../../constants';
import {
  SearchWrapper, SearchInput, IconContainer, InputContainer,
} from './styles';

const Search = () => {
  const [value, setValue] = useState('');
  const [data, setData] = useState([]);

  const onHandleChange = async (e) => {
    const currentValue = e.target.value;
    setValue(currentValue);
    if (!currentValue.length) {
      setData([]);
    }
    if (currentValue.trim().length > 0) {
      const { movies } = await moviesAPI.get({
        title: e.target.value,
        page: SEARCH_PARAMS.REQUEST_PAGE,
        perPage: SEARCH_PARAMS.REQUEST_PER_PAGE,
      });
      setData(movies);
    }
  };

  return (
    <SearchWrapper>
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
      {value.length > 0 && <List movies={data} />}
    </SearchWrapper>
  );
};

export default Search;
