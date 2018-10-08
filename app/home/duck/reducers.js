import types from './types';
import { combineReducers } from 'redux'; 
import { handleActions } from 'redux-actions';

const initialState = {
    activeTab: 'form'
}

const uiReducer = handleActions(
    {
        [types.UI_TAB_CHANGE]: (state, action) => {
           return { ...state, activeTab: action.payload }
         }
    },
    initialState
)

const reducer = combineReducers({
    ui: uiReducer
})
export default reducer;
