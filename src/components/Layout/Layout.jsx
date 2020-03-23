import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import queryString from 'query-string';
import PropTypes from 'prop-types';
import Header from '../Header';
import Logo from '../Icons/Logo';
import { Nav, NavLink } from '../Nav';
import { Translation, TranslationLink } from '../Translation';
import Filter from '../Filter';
import Search from '../Search';
import { NAV_LINKS, LANGUAGES } from '../../constants';
import { Container, NavContainer } from './styles';

const Layout = ({ children }) => {
  const history = useHistory();
  const location = useLocation();
  const { filter } = queryString.parse(location.search);
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const handleFilter = (value) => {
    history.push(`/movies?filter=${value}`);
  };

  const handleTranslation = (value) => {
    i18n.changeLanguage(value);
  };

  return (
    <Container>
      <Header>
        <NavContainer>
          <Logo />
          <Nav>
            {NAV_LINKS.map(({ value }, index) => (
              <NavLink
                onClickLink={handleFilter}
                value={value}
                filter={filter}
                title={t(`header.labels.${value}`)}
                key={index} // eslint-disable-line
              />
            ))}
          </Nav>
          <Filter />
          <Translation>
            {LANGUAGES.map((language, index) => (
              <TranslationLink
                onClickLink={handleTranslation}
                language={language}
                currentLanguage={currentLanguage}
                key={index} // eslint-disable-line
              />
            ))}
          </Translation>
        </NavContainer>
        <Search />
      </Header>
      {children}
    </Container>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
