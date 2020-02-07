import React from 'react';
import PropTypes from 'prop-types';

const SearchIcon = ({
  fill, width, height, viewBox,
}) => (
  <svg width={width} height={height} viewBox={viewBox} fill={fill} xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M6.5 12.5C3.18629 12.5 0.5 9.81371 0.5 6.5C0.5 3.18629 3.18629 0.5 6.5 0.5C9.81371 0.5 12.5 3.18629 12.5 6.5C12.5 7.88654 12.0297 9.16323 11.2399 10.1792L15.2803 14.2197L14.2197 15.2803L10.1792 11.2399C9.16321 12.0297 7.88653 12.5 6.5 12.5ZM11 6.5C11 8.98528 8.98528 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5Z" fill="#666666" />
  </svg>
);

SearchIcon.propTypes = {
  fill: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  viewBox: PropTypes.string,
};

SearchIcon.defaultProps = {
  fill: 'none',
  width: '16',
  height: '16',
  viewBox: '0 0 16 16',
};

export default SearchIcon;
