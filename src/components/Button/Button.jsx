import React from 'react';
import PropTypes from 'prop-types';
import { SimpleButton } from './styles';

const Button = ({ type, label }) => (
  <SimpleButton type={type}>{label}</SimpleButton>
);

Button.defaultProps = {
  type: 'primary',
};

Button.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
};

export default Button;
