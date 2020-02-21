import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import rootReducer from './reducers';

const sagaMiddleware = createSagaMiddleware();
const logger = createLogger();

const configureStore = () => {
  const store = createStore(
    rootReducer,
    applyMiddleware(logger, sagaMiddleware),
  );

  sagaMiddleware.run(rootSaga);

  return store;
};

export default configureStore();
