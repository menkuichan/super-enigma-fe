import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import moviesAPI from '../../api/movies';
import Header from '../Header';
import Logo from '../Icons/Logo';
import { Nav, NavLink } from '../Nav';
import Search from '../Search';
import { NAV_LINKS } from '../../constants';
import { NavWrapper } from './styles';

const Layout = ({children, loadMovies}) => {
  const [value, setValue] = useState(0);
  // 'Popular', 'Now playing', 'Upcoming', 'Most rated',
  useEffect(() => {
    switch (value) {
      case 0:
        moviesAPI.get({
          page: 1,
          perPage: 20,
          sortBy: 'popularity.desc',
        }).then(({ movies }) => loadMovies(movies));
        break;
      case 1:
        moviesAPI.get({
          page: 1,
          perPage: 20,
          sortBy: 'year.desc',
        }).then(({ movies }) => loadMovies(movies));
        break;
      case 2:
        moviesAPI.get({
          page: 1,
          perPage: 20,
          sortBy: 'year.desc',
        }).then(({ movies }) => loadMovies(movies));
        break;
      case 3:
        moviesAPI.get({
          page: 1,
          perPage: 20,
          sortBy: 'vote_count.desc',
        }).then(({ movies }) => loadMovies(movies));
        break;
      default:
        break;
    }
  }, [value]);

  return (
    <>
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
      {children}
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
