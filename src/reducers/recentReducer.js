import { FETCH_RECENT } from '../actions/actions.js';

export default function(state = {}, action) {
  switch(action.type) {
    case FETCH_RECENT:
      return action.payload;
    default:
      return state;
  }
}
