import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { LinkButton } from './styles';

const NavLink = ({
  title, value, index, onClickLink,
}) => (
  <Link to="/movies">
    <LinkButton
      onClick={() => onClickLink(index)}
      value={value}
      index={index}
    >
      {title}
    </LinkButton>
  </Link>
);

NavLink.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  onClickLink: PropTypes.func.isRequired,
};

export default NavLink;
