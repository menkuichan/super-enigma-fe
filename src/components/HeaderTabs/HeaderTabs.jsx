import React from 'react';
import PropTypes from 'prop-types';

import Tab from './Tab';

import HEADER_TABS from '../../constants';
import { TabsWrapper } from './style';

const HeaderTabs = ({ value, onClickTab }) => (
  <TabsWrapper>
    {HEADER_TABS.map((title, index) => (
      <Tab
        onClickTab={onClickTab}
        value={value}
        index={index}
        title={title}
      />
    ))}
  </TabsWrapper>
);

HeaderTabs.propTypes = {
  value: PropTypes.number.isRequired,
  onClickTab: PropTypes.func.isRequired,
};

export default HeaderTabs;
