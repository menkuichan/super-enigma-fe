import React from 'react';

import { Svg, SpinnerContainer, Circle } from './styles';

const Spinner = () => (
  <SpinnerContainer>
    <Svg viewBox="0 0 100 100">
      <Circle />
    </Svg>
  </SpinnerContainer>
);

export default Spinner;
