/**
 * Created by corentin on 27/11/2018.
 */
import {createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from '../Reducers';

export default function configureStore() {

  const middlewares = [thunkMiddleware];
  return createStore(rootReducer, compose(
    applyMiddleware(
      ...middlewares,
      //logger
    )
  ));
};