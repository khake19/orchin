import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import homeReducer from '../home/duck';
import userReducer from '../users/duck';

const rootReducer = combineReducers({
  home: homeReducer,
  user: userReducer,
  router
});

export default rootReducer;
