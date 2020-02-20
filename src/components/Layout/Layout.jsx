import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import PropTypes from 'prop-types';
import Header from '../Header';
import Logo from '../Icons/Logo';
import { Nav, NavLink } from '../Nav';
import Search from '../Search';
import { NAV_LINKS } from '../../constants';
import { NavWrapper } from './styles';

const Layout = ({ children }) => {
  const history = useHistory();
  const location = useLocation();
  const { filter } = queryString.parse(location.search);

  const handleFilter = (value) => {
    history.push(`/movies?filter=${value}`);
  };

  return (
    <>
      <Header>
        <NavWrapper>
          <Logo />
          <Nav>
            {NAV_LINKS.map(({ title, value }, index) => (
              <NavLink
                onClickLink={handleFilter}
                value={value}
                filter={filter}
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
      {children}
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
