import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import types from './types';

const initialState = {
  activeTab: 'form'
};

const uiReducer = handleActions(
  {
    [types.UI_TAB_CHANGE]: (state, action) => ({
      ...state,
      activeTab: action.payload
    })
  },
  initialState
);

const reducer = combineReducers({
  ui: uiReducer
});
export default reducer;
