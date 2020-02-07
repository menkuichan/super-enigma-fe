import React from 'react';
import PropTypes from 'prop-types';

import NavLink from './NavLink';

import { NAV_LINKS } from '../../constants';

const HeaderNav = ({ value, onClickLink }) => (
  <div>
    {NAV_LINKS.map((title, index) => (
      <NavLink
        onClickLink={onClickLink}
        value={value}
        index={index}
        title={title}
      />
    ))}
  </div>
);

HeaderNav.propTypes = {
  value: PropTypes.number.isRequired,
  onClickLink: PropTypes.func.isRequired,
};

export default HeaderNav;
