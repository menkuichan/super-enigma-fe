import React, { useState } from 'react';
import Header from '../../components/Header';
import Logo from '../../components/Icons/Logo';
import { Nav, NavLink } from '../../components/Nav';
import Search from '../../components/Search';
import { NAV_LINKS } from '../../constants';
import { NavWrapper } from './styles';

const MoviesPage = () => {
  const [value, setValue] = useState(0);

  return (
    <div>
      <Header>
        <NavWrapper>
          <Logo />
          <Nav>
            {NAV_LINKS.map((title, index) => (
              <NavLink
                onClickLink={setValue}
                value={value}
                index={index}
                title={title}
                key={index} // eslint-disable-line
              />
            ))}
          </Nav>
        </NavWrapper>
        <div>
          <Search />
        </div>
      </Header>
    </div>
  );
};

export default MoviesPage;
