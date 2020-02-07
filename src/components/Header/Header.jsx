import React from 'react';

import HeaderNav from '../HeaderNav';
import Logo from '../Icons/Logo';
import Input from '../Search';

import { HeaderWrapper, NavWrapper } from './styles';

const Header = () => (
  <HeaderWrapper>
    <NavWrapper>
      <Logo />
      <HeaderNav />
    </NavWrapper>
    <div>
      <Input />
    </div>
  </HeaderWrapper>
);

export default Header;
