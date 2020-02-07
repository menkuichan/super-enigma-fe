import React, { useState } from 'react';

import NavLink from './NavLink';

import { NAV_LINKS } from '../../constants';

const HeaderNav = () => {
  const [value, setValue] = useState(0);
  return (
    <div>
      {NAV_LINKS.map((title, index) => (
        <NavLink
          onClickLink={setValue}
          value={value}
          index={index}
          title={title}
          key={index} // eslint-disable-line
        />
      ))}
    </div>
  );
};

export default HeaderNav;
