import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { enableBatching } from 'redux-batched-actions';
import rootSaga from './sagas';
import rootReducer from './reducers';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;

const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware),
);

const configureStore = () => {
  /*
    Some notes about `enableBatching`:
    We can batch several actions to result single change
    in redux store using redux-batched-actions. See more at
    1. https://redux.js.org/style-guide/style-guide/#avoid-dispatching-many-actions-sequentially
    2. https://github.com/reduxjs/redux/issues/911
    3. https://redux.js.org/faq/performance/#how-can-i-reduce-the-number-of-store-update-events
    or do such things in one action (write complex saga and dispatch only one action with all data).
  */
  const store = createStore(enableBatching(rootReducer), enhancer);
  sagaMiddleware.run(rootSaga);

  return store;
};

export default configureStore();
