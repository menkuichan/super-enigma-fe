import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import * as reducers from './reducers';

const sagaMiddleware = createSagaMiddleware();
const logger = createLogger();

const configureStore = () => {
  const store = createStore(
    combineReducers({
      ...reducers,
    }),
    applyMiddleware(logger, sagaMiddleware),
  );

  sagaMiddleware.run(rootSaga);

  return store;
};

export default configureStore();
