import  types from  './types.js';
import { createAction } from 'redux-actions';

const changeActiveTab = createAction(
    types.UI_TAB_CHANGE,
    tabName => tabName
)

export default {
    changeActiveTab
}

