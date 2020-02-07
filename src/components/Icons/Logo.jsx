import React from 'react';
import PropTypes from 'prop-types';

const Logo = ({
  fill, width, height, viewBox,
}) => (
  <svg width={width} height={height} viewBox={viewBox} fill={fill} xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0)">
      <path d="M30 0H0V30H30V0Z" fill="#110F10" stroke="#F79B0E" strokeWidth="6" />
      <path d="M21.5 8.5H8.5V21.5H21.5V8.5Z" fill="#F79B0E" />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="30" height="30" rx="3" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

Logo.propTypes = {
  fill: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  viewBox: PropTypes.string,
};

Logo.defaultProps = {
  fill: 'none',
  width: '30',
  height: '30',
  viewBox: '0 0 30 30',
};

export default Logo;
