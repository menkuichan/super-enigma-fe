import React, { useState } from 'react';

import HeaderTabs from '../HeaderTabs';
import Logo from '../Icons/Logo';
import Search from '../Search';

import { HeaderWrapper, TabsWrapper } from './style';

const Header = () => {
  const [value, setValue] = useState(0);
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
        <Search />
      </div>
    </HeaderWrapper>
  );
};

export default Header;
