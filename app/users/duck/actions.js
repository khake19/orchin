import { createAction } from 'redux-actions';
import types from './types';
import Schema from './schema';
import searchFilter from '../../utils/searchFilter';

const schema = new Schema();

const addEmployee = createAction(
  types.ADD_EMPLOYEE,
  payload => ({
    types: [types.ADD_EMPLOYEE_SUCCESS, types.ADD_EMPLOYEE_FAILURE],
    promise: schema.save(payload)
  }),
  () => ({ request: 'api' })
);

const getEmployees = createAction(
  types.GET_EMPLOYEES,

  options => ({
    types: [types.GET_EMPLOYEES_SUCCESS, types.GET_EMPLOYEES_FAILURE],
    promise: schema.findAll(searchFilter(options))
  }),
  () => ({ request: 'api' })
);
export default {
  addEmployee,
  getEmployees
};
