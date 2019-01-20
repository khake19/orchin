import { createAction } from 'redux-actions';
import types from './types';

const changeActiveTab = createAction(types.UI_TAB_CHANGE, tabName => tabName);

export default {
  changeActiveTab
};
