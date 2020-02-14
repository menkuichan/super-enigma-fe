import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { ThemeProvider } from 'styled-components';
import Layout from './components/Layout';
import MovieCard from './components/MovieCard';
import GlobalStyles from './components/GlobalStyles';
import theme from './theme';

const history = createBrowserHistory();

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Router history={history}>
      <Layout>
        <Switch>
          <Route
            path="/movies"
            component={MovieCard}
          />
          <Route
            path="/movies/:id"
            component={MovieCard}
          />
        </Switch>
      </Layout>
    </Router>
  </ThemeProvider>,
  document.getElementById('root'),
);
