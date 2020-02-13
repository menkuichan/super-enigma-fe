import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import MoviesPage from './Pages/MoviePage';
import GlobalStyles from './components/GlobalStyles';
import theme from './theme';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <MoviesPage />
  </ThemeProvider>,
  document.getElementById('root'),
);
