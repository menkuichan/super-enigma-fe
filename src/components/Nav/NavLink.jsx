import React from 'react';
import PropTypes from 'prop-types';
import { LinkButton } from './styles';

const NavLink = ({
  title, value, onClickLink, filter,
}) => (
  <LinkButton
    onClick={() => onClickLink(value)}
    value={value}
    filter={filter}
  >
    {title}
  </LinkButton>
);

NavLink.defaultProps = {
  filter: '',
};

NavLink.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  filter: PropTypes.string,
  onClickLink: PropTypes.func.isRequired,
};

export default NavLink;
