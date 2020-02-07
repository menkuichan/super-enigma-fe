import React from 'react';
import PropTypes from 'prop-types';
import SearchIcon from '../Icons/SearchIcon';
import { SearchWrapper, SearchInput } from './styles';

const Search = ({ searchQuery, onChange, onEnterPress }) => (
  <SearchWrapper>
    <SearchInput
      placeholder="Search…"
      onKeyPress={onEnterPress}
      onChange={onChange}
      value={searchQuery}
    />
    <SearchIcon />
  </SearchWrapper>
);

Search.defaultProps = {
  searchQuery: '',
};

Search.propTypes = {
  searchQuery: PropTypes.string,
  onEnterPress: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Search;
