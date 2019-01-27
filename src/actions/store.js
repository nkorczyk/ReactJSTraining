import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/';

const loggerMiddleware = applyMiddleware(thunk);

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    loggerMiddleware
  );
}
