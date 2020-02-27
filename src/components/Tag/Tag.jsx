import React from 'react';
import PropTypes from 'prop-types';
import { TagContainer, TagLabel } from './styles';

const Tag = ({
  active, label, onClick, id,
}) => {
  const handleClick = () => {
    onClick(id);
  };

  return (
    <TagContainer
      active={active}
      label={label}
      onClick={handleClick}
    >
      <TagLabel>{label}</TagLabel>
    </TagContainer>
  );
};

Tag.propTypes = {
  id: PropTypes.number.isRequired,
  active: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Tag;
