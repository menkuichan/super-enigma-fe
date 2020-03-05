import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { ThemeProvider } from 'styled-components';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
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
        <Route
          render={({ location }) => (
            <Layout>
              <TransitionGroup component={null}>
                <CSSTransition
                  timeout={300}
                  classNames="page"
                  key={location.key}
                >
                  <Switch location={location}>
                    <Route exact path="/">
                      <Redirect to="/movies" />
                    </Route>
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
                </CSSTransition>
              </TransitionGroup>
            </Layout>
          )}
        />
      </Router>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
);
