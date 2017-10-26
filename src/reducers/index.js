import { combineReducers } from 'redux';
import recentReducer from './recentReducer';
import showReducer from './showReducer';

const rootReducer = combineReducers({
  recent: recentReducer,
  show: showReducer
});

export default rootReducer;
