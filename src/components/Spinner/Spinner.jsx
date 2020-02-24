import React from 'react';
import PropTypes from 'prop-types';
import { Svg, Circle } from './styles';

const Spinner = ({ width, height, viewBox }) => (
  <Svg viewBox={viewBox} height={height} width={width}>
    <Circle cx="50" cy="50" r="45" />
  </Svg>
);

Spinner.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  viewBox: PropTypes.string,
};

Spinner.defaultProps = {
  width: '85',
  height: '85',
  viewBox: '0 0 100 100',
};

export default Spinner;
