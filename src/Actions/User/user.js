/**
 * Created by corentin on 27/11/2018.
 */
import * as C from './types';

export const loadingUser = () => {
  return {
    type: C.LOADING_USER
  }
};

export const loginUserSuccess = (user) => {
  return {
    type: C.LOGIN_USER_SUCCESS,
    user
  }
};

export const loginUserError = (error) => {
  return {
    type: C.LOGIN_USER_ERROR,
    error
  }
};

export const login = (user) => {
  return (dispatch) => {
    dispatch(loadingUser());
    if (!user.name || typeof user.name !== 'string' ||
      !user.id|| typeof user.id !== 'string') {
      dispatch(loginUserError('Variable is missing'))
    } else {
      dispatch(loginUserSuccess(user))
    }
  }
};