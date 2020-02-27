import React from 'react';
import PropTypes from 'prop-types';
import { TagContainer, TagLabel } from './styles';

const Tag = ({ genres, label }) => (
  <TagContainer genres={genres} label={label}>
    <TagLabel>{label}</TagLabel>
  </TagContainer>
);

Tag.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  label: PropTypes.string.isRequired,
};

export default Tag;
