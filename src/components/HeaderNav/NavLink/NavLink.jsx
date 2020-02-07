import React from 'react';
import PropTypes from 'prop-types';

import { HeaderTab } from './style';

const NavLink = ({
  title, value, index, onClickLink,
}) => (
  <HeaderTab
    onClick={() => onClickLink(index)}
    value={value}
    index={index}
  >
    {title}
  </HeaderTab>
);

NavLink.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  onClickLink: PropTypes.func.isRequired,
};

export default NavLink;
