import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import rootReducer from './reducers';

const sagaMiddleware = createSagaMiddleware();
const logger = createLogger();

const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;

const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware, logger),
);

const configureStore = () => {
  const store = createStore(rootReducer, enhancer);
  sagaMiddleware.run(rootSaga);

  return store;
};

export default configureStore();
