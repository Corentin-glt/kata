/**
 * Created by corentin on 27/11/2018.
 */
import * as C from '../Actions/User/types';

const initialState = {
  user: {name: 'Jean', id: '1234567890'},
  loading: false,
  error: null,
  success: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case C.LOADING_USER:
      return {
        ...state,
        loading: true,
        success: false,
        error: null,
      };
    case C.LOGIN_USER_SUCCESS:
      return {
        user: {...action.user},
        loading: false,
        success: true,
        error: null,
      };
    case C.LOGIN_USER_ERROR:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.error,
      };
    default:
      return {
        ...state
      };
  }
}