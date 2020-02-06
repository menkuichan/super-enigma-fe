import React from 'react';
import PropTypes from 'prop-types';

import { SearchInput } from './style';

const Search = ({ searchQuery, onChange, onEnterPress }) => {
  return (
    <SearchInput
      placeholder="Search…"
      onKeyPress={onEnterPress}
      onChange={onChange}
      value={searchQuery}
    />
  );
};

Search.defaultProps = {
  searchQuery: '',
};

Search.propTypes = {
  searchQuery: PropTypes.string,
  onEnterPress: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Search;
