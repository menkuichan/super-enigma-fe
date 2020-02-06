import React from 'react';

import { Svg, Rectangle } from './style';

const Logo = () => (
  <Svg width="30" height="30">
    <Rectangle width="30" height="30" strokeWidth="7" stroke="#F79B0E" fill="#110F10" />
    <Rectangle x="8.5" y="8.5" width="13" height="13" fill="#F79B0E" />
  </Svg>
);

export default Logo;
