import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { ThemeProvider } from 'styled-components';

import Layout from './components/Layout';
import MovieCard from './components/MovieCard';
import GlobalStyles from './components/GlobalStyles';
import MoviesView from './components/views/MoviesView';
import { configureStore } from './store';
import theme from './theme';

const history = createBrowserHistory();
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router history={history}>
        <Layout>
          <Switch>
            <Route
              path="/movies"
              component={MoviesView}
            />
            <Route
              path="/movies/:id"
              component={MovieCard}
            />
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
);
