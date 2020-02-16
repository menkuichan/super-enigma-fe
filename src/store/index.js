import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import * as reducers from './reducers';

export const configureStore = () => createStore(
  combineReducers({
    ...reducers,
  }),
  applyMiddleware(
    createLogger(),
  ),
);

export default configureStore;
