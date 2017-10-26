import { combineReducers } from 'redux';
import recentReducer from './recentReducer';
import showReducer from './showReducer';
import searchReducer from './searchReducer';

const rootReducer = combineReducers({
  recent: recentReducer,
  show: showReducer,
  search: searchReducer
});

export default rootReducer;
