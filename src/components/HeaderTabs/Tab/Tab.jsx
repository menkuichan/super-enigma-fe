import React from 'react';
import PropTypes from 'prop-types';

import { HeaderTab } from './style';

const Tab = ({
  title, value, index, onClickTab,
}) => (
  <HeaderTab
    onClick={() => onClickTab(index)}
    value={value}
    index={index}
  >
    {title}
  </HeaderTab>
);

Tab.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  onClickTab: PropTypes.func.isRequired,
};

export default Tab;
