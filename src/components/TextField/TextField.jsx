import React from 'react';
import PropTypes from 'prop-types';
import { Input } from './styles';

const TextField = ({ value, onChange }) => (
  <Input value={value} onChange={onChange} />
);

TextField.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TextField;
