import React from 'react';
import PropTypes from 'prop-types';
import { Input } from './styles';

const TextField = ({ value, onChange, placeholder }) => (
  <Input
    value={value}
    onChange={onChange}
    placeholder={placeholder}
  />
);

TextField.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

TextField.defaultProps = {
  placeholder: '',
};

export default TextField;
