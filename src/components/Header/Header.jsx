import React, { useState } from 'react';

import HeaderTabs from '../HeaderTabs';
import Logo from '../Icons/Logo';
import Search from '../Search';

import { ENTER_KEY } from '../../constants';

import { HeaderWrapper, TabsWrapper } from './style';

const Header = () => {
  const [value, setValue] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const onEnterPress = (e) => {
    if (e.charCode === ENTER_KEY) {
      setSearchQuery(searchQuery);
    }
  };

  const onHandleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <HeaderWrapper>
      <TabsWrapper>
        <Logo />
        <HeaderTabs
          onClickTab={setValue}
          value={value}
        />
      </TabsWrapper>
      <div>
        <Search
          onChange={onHandleChange}
          onEnterPress={onEnterPress}
          searchQuery={searchQuery}
        />
      </div>
    </HeaderWrapper>
  );
};

export default Header;
