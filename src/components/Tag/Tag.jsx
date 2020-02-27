import React from 'react';
import PropTypes from 'prop-types';
import { TagContainer, TagLabel } from './styles';

const Tag = ({ genres, label, onClick }) => (
  <TagContainer genres={genres} label={label} onClick={() => onClick(label)}>
    <TagLabel>{label}</TagLabel>
  </TagContainer>
);

Tag.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Tag;
