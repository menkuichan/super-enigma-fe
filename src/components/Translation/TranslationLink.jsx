import React from 'react';
import PropTypes from 'prop-types';
import { LinkButton } from './styles';

const TranslationLink = ({ onClickLink, language, currentLanguage }) => (
  <LinkButton
    onClick={() => onClickLink(language)}
    value={language}
    filter={currentLanguage}
  >
    {language}
  </LinkButton>
);

TranslationLink.propTypes = {
  currentLanguage: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  onClickLink: PropTypes.func.isRequired,
};

export default TranslationLink;
