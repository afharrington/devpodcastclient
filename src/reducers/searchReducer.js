import { SEARCH_TITLES, SEARCH_TAGS } from '../actions/actions.js';

export default function(state = {}, action) {
  switch(action.type) {
    case SEARCH_TITLES:
      return {...state, foundByTitle: action.payload };
    case SEARCH_TAGS:
      return {...state, foundByTag: action.payload };
    default:
      return state;
  }
}
