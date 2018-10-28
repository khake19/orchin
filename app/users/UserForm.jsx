import React, { Component } from 'react';
import { Formik, Field } from 'formik';

class UserForm extends Component {
  render() {
    return (
      <Formik
        initialValues={{ email: '' }}
        render={() => (
          <form>
            <Field type="email" name="email" placeholder="Email" />
          </form>
        )}
      />
    );
  }
}

export default UserForm;
