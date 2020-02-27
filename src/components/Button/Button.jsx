import React from 'react';
import PropTypes from 'prop-types';
import { ButtonContainer } from './styles';

const Button = ({ type, label, onClick }) => (
  <ButtonContainer onClick={onClick} type={type}>{label}</ButtonContainer>
);

Button.defaultProps = {
  type: 'primary',
};

Button.propTypes = {
  type: PropTypes.oneOf(['primary', 'secondary']),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
