import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SearchIcon from '../Icons/SearchIcon';
import { ENTER_KEY } from '../../constants';
import { SearchWrapper, SearchInput } from './styles';

const Input = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const onEnterPress = (e) => {
    if (e.charCode === ENTER_KEY) {
      setSearchQuery(searchQuery);
    }
  };

  const onHandleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <SearchWrapper>
      <SearchInput
        placeholder="Search…"
        onKeyPress={onEnterPress}
        onChange={onHandleChange}
        value={searchQuery}
      />
      <SearchIcon />
    </SearchWrapper>
  );
};

export default Input;
