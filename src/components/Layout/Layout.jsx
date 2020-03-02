import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import PropTypes from 'prop-types';
import Header from '../Header';
import Logo from '../Icons/Logo';
import { Nav, NavLink } from '../Nav';
import Filter from '../Filter';
import Search from '../Search';
import { NAV_LINKS } from '../../constants';
import { NavContainer } from './styles';

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
        <NavContainer>
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
          <Filter />
        </NavContainer>
        <>
          <Search />
        </>
      </Header>
      {children}
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
