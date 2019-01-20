import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TR, TD } from '../common/Table/Table';
import Button from '../common/Button/Button';

class UserDetail extends Component {
  deleteContact = () => console.log('delete button');

  render() {
    const { employee } = this.props;
    const fullName = `${employee.firstName} ${employee.middleName} ${
      employee.lastName
    }`;
    return (
      <TR>
        <TD bold>{fullName}</TD>
        <TD>{employee.age}</TD>
        <TD>{employee.gender}</TD>
        <TD actions>
          <Button link primary>
            <i className="ion-plus-round" />
          </Button>
          <Button link danger onClick={this.deleteContact}>
            <i className="ion-close-circled" />
          </Button>
        </TD>
      </TR>
    );
  }
}
UserDetail.propTypes = {
  employee: PropTypes.shape().isRequired
};

export default UserDetail;
