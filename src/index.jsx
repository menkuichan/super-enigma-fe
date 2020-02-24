import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { ThemeProvider } from 'styled-components';
import Layout from './components/Layout';
import MovieDescription from './pages/MovieDescription';
import GlobalStyles from './components/GlobalStyles';
import MoviesView from './pages/MoviesView';
import store from './store';
import theme from './theme';

const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router history={history}>
        <Layout>
          <Switch>
            <Route
              exact
              path="/movies"
              component={MoviesView}
            />
            <Route
              path="/movies/:id"
              component={MovieDescription}
            />
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
);
