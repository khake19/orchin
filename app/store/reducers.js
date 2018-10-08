import  { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import homeReducer from '../home/duck';

//list of reducers
const rootReducer = combineReducers({
   home: homeReducer,
   router
})

export default rootReducer;
