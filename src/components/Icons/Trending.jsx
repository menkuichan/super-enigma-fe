import React from 'react';
import PropTypes from 'prop-types';

const Trending = ({
  fill, width, height, viewBox, className,
}) => (
  <svg
    width={width}
    height={height}
    viewBox={viewBox}
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M0 0V2H18V0H0ZM7 12H11V10H7V12ZM15 7H3V5H15V7Z" />
  </svg>
);

Trending.propTypes = {
  className: PropTypes.string.isRequired,
  fill: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  viewBox: PropTypes.string,
};

Trending.defaultProps = {
  fill: '#fff',
  width: '18',
  height: '12',
  viewBox: '0 0 18 12',
};

export default Trending;
