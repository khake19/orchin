import actions from './actions';

const addEmployee = employee => dispatch =>
  dispatch(actions.addEmployee(employee));

const getEmployees = options => dispatch =>
  dispatch(actions.getEmployees(options));

export default {
  addEmployee,
  getEmployees
};
