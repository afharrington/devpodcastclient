import { FETCH_SHOW } from '../actions/actions.js';
import { FETCH_RECENT_EPISODES } from '../actions/actions.js';

export default function(state = {}, action) {
  switch(action.type) {
    case FETCH_SHOW:
      return { ...state, showDetails: action.payload };
    case FETCH_RECENT_EPISODES:
      return { ...state, recentEpisodes: action.payload };
    default:
      return state;
  }
}
