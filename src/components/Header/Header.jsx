import React, { useState } from 'react';

import HeaderNav from '../HeaderNav';
import Logo from '../Icons/Logo';
import Search from '../Search';

import { ENTER_KEY } from '../../constants';

import { HeaderWrapper, NavWrapper } from './styles';

const Header = () => {
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
      <NavWrapper>
        <Logo />
        <HeaderNav />
      </NavWrapper>
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
