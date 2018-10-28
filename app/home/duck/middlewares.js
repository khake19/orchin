import types from './types';
import { play } from '../../utils';

const homeMiddleware = ({ getState }) => next => action => {
  const currentState = getState();
  switch (action.type) {
    case types.UI_TAB_CHANGE:
      if (action.payload !== currentState.home.ui.activeTab) {
        play('TAP');
        next(action);
      }
      next(action);
      break;
    default:
      return next(action);
  }
};

export default homeMiddleware;
