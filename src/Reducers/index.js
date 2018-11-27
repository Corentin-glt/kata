/**
 * Created by corentin on 27/11/2018.
 */
import { combineReducers } from 'redux';
import packReducer from './pack';
import userReducer from './user';

export default combineReducers({
  packReducer,
  userReducer
});