import { connect } from 'react-redux';
import { userOperations } from './duck';

const { addEmployee, getEmployees } = userOperations;
const mapStateToProps = state => ({
  employee: state.user.employee,
  employees: state.user.employees
});

export default connect(
  mapStateToProps,
  { addEmployee, getEmployees }
);
