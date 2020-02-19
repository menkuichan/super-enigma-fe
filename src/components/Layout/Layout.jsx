import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import moviesAPI from '../../api/movies';
import Header from '../Header';
import Logo from '../Icons/Logo';
import { Nav, NavLink } from '../Nav';
import Search from '../Search';
import { NAV_LINKS } from '../../constants';
import { NavWrapper } from './styles';

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);

  useEffect(() => {
    moviesAPI.get({
      page: 1,
      perPage: 20,
      sortBy: NAV_LINKS[value].filter,
    }).then(({ movies }) => {
      dispatch({
        type: 'LOAD_MOVIES',
        payload: movies,
      });
    });
  }, [dispatch, value]);

  return (
    <>
      <Header>
        <NavWrapper>
          <Logo />
          <Nav>
            {NAV_LINKS.map(({ title }, index) => (
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
      {children}
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
