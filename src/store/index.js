import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/sagas';
import * as reducers from './reducers';

const sagaMiddleware = createSagaMiddleware();
const logger = createLogger();

const configureStore = () => createStore(
  combineReducers({
    ...reducers,
  }),
  applyMiddleware(logger, sagaMiddleware),
);

sagaMiddleware.run(rootSaga);

export default configureStore;
