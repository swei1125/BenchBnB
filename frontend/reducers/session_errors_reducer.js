import { RECEIVE_ERRORS, RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { union } from 'lodash';

export default (state = [], action) => {
  Object.freeze(state);
  const newState = [];

  switch(action.type){
    case RECEIVE_ERRORS:
      return action.errors;
    case RECEIVE_CURRENT_USER:
      return newState;
    default:
      return state;
  }
};
