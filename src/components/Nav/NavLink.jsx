import React from 'react';
import PropTypes from 'prop-types';
import { LinkButton } from './styles';

const NavLink = ({
  title, value, index, onClickLink,
}) => (
  <LinkButton
    onClick={() => onClickLink(index)}
    value={value}
    index={index}
  >
    {title}
  </LinkButton>
);

NavLink.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  onClickLink: PropTypes.func.isRequired,
};

export default NavLink;
