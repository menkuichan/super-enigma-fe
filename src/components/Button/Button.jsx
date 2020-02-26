import React from 'react';
import PropTypes from 'prop-types';
import { SimpleButton } from './styles';

const Button = ({ type, label, onClick }) => (
  <SimpleButton onClick={onClick} type={type}>{label}</SimpleButton>
);

Button.defaultProps = {
  type: 'primary',
};

Button.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
