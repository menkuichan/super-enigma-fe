import React from 'react';
import PropTypes from 'prop-types';

import Tab from './NavLink';

import { NAV_LINKS } from '../../constants';

const HeaderTabs = ({ value, onClickTab }) => (
  <div>
    {NAV_LINKS.map((title, index) => (
      <Tab
        onClickTab={onClickTab}
        value={value}
        index={index}
        title={title}
      />
    ))}
  </div>
);

HeaderTabs.propTypes = {
  value: PropTypes.number.isRequired,
  onClickTab: PropTypes.func.isRequired,
};

export default HeaderTabs;
