/**
 * Created by corentin on 27/11/2018.
 */
import * as packActions from './Pack/pack';
import * as userActions from './User/user';

export const ActionCreators = Object.assign({},
  packActions,
  userActions
);