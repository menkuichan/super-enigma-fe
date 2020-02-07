import React from 'react';
import PropTypes from 'prop-types';

import { Link } from './styles';

const NavLink = ({
  title, value, index, onClickLink,
}) => (
  <Link
    onClick={() => onClickLink(index)}
    value={value}
    index={index}
  >
    {title}
  </Link>
);

NavLink.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  onClickLink: PropTypes.func.isRequired,
};

export default NavLink;
