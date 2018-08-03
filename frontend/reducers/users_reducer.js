import {RECEIVE_CURRENT_USER} from '../actions/session_actions';
import {merge} from 'lodash';

export default (state = {}, action) => {
  Object.freeze(state);
  const newState = merge({}, state);

  switch(action.type){
    case RECEIVE_CURRENT_USER:
      return merge(newState, {[action.user.id]: action.user});
    default:
      return newState;
  }
};
