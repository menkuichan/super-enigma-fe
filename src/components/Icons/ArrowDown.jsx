import React from 'react';
import PropTypes from 'prop-types';

const ArrowDown = ({
  fill, width, height, viewBox,
}) => (
  <svg width={width} height={height} viewBox={viewBox} fill={fill} xmlns="http://www.w3.org/2000/svg">
    <path d="M0.94 0.529999L4 3.58333L7.06 0.529999L8 1.47L4 5.47L0 1.47L0.94 0.529999Z" fill="#666666" />
  </svg>
);

ArrowDown.propTypes = {
  fill: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  viewBox: PropTypes.string,
};

ArrowDown.defaultProps = {
  fill: 'none',
  width: '8',
  height: '16',
  viewBox: '0 0 8 6',
};

export default ArrowDown;
