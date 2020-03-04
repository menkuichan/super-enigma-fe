import React from 'react';
import PropTypes from 'prop-types';

const SortBy = ({
  onClick, width, height, viewBox, fill, className,
}) => (
  <svg className={className} onClick={onClick} width={width} height={height} viewBox={viewBox} fill={fill} xmlns="http://www.w3.org/2000/svg">
    <path d="M9.66659 0L11.1933 1.52667L7.93992 4.78L5.27325 2.11333L0.333252 7.06L1.27325 8L5.27325 4L7.93992 6.66667L12.1399 2.47333L13.6666 4V0H9.66659Z" fill="black" fillOpacity="0.54" />
  </svg>
);

SortBy.propTypes = {
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  fill: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  viewBox: PropTypes.string,
};

SortBy.defaultProps = {
  fill: 'none',
  width: '14',
  height: '8',
  viewBox: '0 0 14 8',
};

export default SortBy;
