import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import MoviesPage from './Pages/MoviePage';
import theme from './theme';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <MoviesPage />
  </ThemeProvider>,
  document.getElementById('root'),
);
