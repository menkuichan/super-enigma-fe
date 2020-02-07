import React, { useState } from 'react';
import SearchIcon from '../Icons/SearchIcon';
import { ENTER_KEY } from '../../constants';
import { SearchWrapper, SearchInput } from './styles';

const Search = () => {
  const [value, setvalue] = useState('');

  const onEnterPress = (e) => {
    if (e.charCode === ENTER_KEY) {
      setvalue(value);
    }
  };

  const onHandleChange = (e) => {
    setvalue(e.target.value);
  };

  return (
    <SearchWrapper>
      <SearchInput
        placeholder="Search…"
        onKeyPress={onEnterPress}
        onChange={onHandleChange}
        value={value}
      />
      <SearchIcon />
    </SearchWrapper>
  );
};

export default Search;
