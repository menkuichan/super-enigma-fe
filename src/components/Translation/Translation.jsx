import React from 'react';
import PropTypes from 'prop-types';
import { TranslationContainer } from './styles';

const Translation = ({ children }) => (
  <TranslationContainer>
    {children}
  </TranslationContainer>
);

Translation.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Translation;
