import React, { useState } from 'react';
import axios from 'axios';
import SearchIcon from '../Icons/SearchIcon';
import List from './List';
import { API_URL } from '../../constants';
import { SearchWrapper, SearchInput } from './styles';

const Search = () => {
  const [value, setValue] = useState('');
  const [data, setData] = useState([]);

  const onHandleChange = async (e) => {
    const currentValue = e.target.value;
    setValue(currentValue);
    if (!currentValue.length) {
      setData([]);
    }
    if (currentValue.trim().length) {
      const { data: { movies } } = await axios.get(`${API_URL}/movies`,
        {
          params: {
            title: e.target.value,
            page: 1,
            perPage: 3,
          },
        });
      setData(movies);
    }
  };

  return (
    <div>
      <SearchWrapper>
        <SearchInput
          placeholder="Search…"
          onChange={onHandleChange}
          value={value}
        />
        <SearchIcon />
      </SearchWrapper>
      {value.length ? <List movies={data} /> : <div />}
    </div>
  );
};

export default Search;
