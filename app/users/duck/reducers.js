import { handleActions } from 'redux-actions';
import types from './types';

const initialState = {
  employees: []
};

const employeeReducer = handleActions(
  {
    [types.ADD_EMPLOYEE]: state => ({ ...state, loading: true, saved: false }),
    [types.ADD_EMPLOYEE_SUCCESS]: state => ({
      ...state,
      loading: false,
      saved: true
    }),
    [types.ADD_EMPLOYEE_FAILURE]: (state, action) => ({
      ...state,
      loading: false,
      saved: false,
      error: action.error
    }),
    [types.GET_EMPLOYEES]: state => ({
      ...state,
      fetching: true,
      fetched: false
    }),
    [types.GET_EMPLOYEES_SUCCESS]: (state, action) => ({
      ...state,
      fetching: false,
      fetched: true,
      employees: action.result
    }),
    [types.GET_EMPLOYEES_FAILURE]: (state, action) => ({
      ...state,
      fetching: false,
      fetched: true,
      error: action.error
    })
  },
  initialState
);

export default employeeReducer;
