import React from 'react';

import Svg from './style';

const Logo = () => (
  <Svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0)">
      <path d="M30 0H0V30H30V0Z" fill="#110F10" stroke="#F79B0E" strokeWidth="6" />
      <path d="M21.5 8.5H8.5V21.5H21.5V8.5Z" fill="#F79B0E" />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="30" height="30" rx="3" fill="white" />
      </clipPath>
    </defs>
  </Svg>
);

export default Logo;
