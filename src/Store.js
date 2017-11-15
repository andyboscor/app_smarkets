import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './modules/index';

export default function configureStore() {
  //used for Redux tools
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
  ));
}
