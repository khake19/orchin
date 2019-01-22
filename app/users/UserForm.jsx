import React from 'react';
import PropTypes from 'prop-types';
import { Field, withFormik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Part, Section, Row, Fields } from './UserStyle';
import Button, { ButtonsGroup } from '../common/Button/Button';
import { ErrorLabel } from '../common/Layout/Layout';

const UserSchema = Yup.object().shape({
  firstName: Yup.string().required('first name is required'),
  middleName: Yup.string().required('middle name is required'),
  lastName: Yup.string().required('last name is required'),
  address: Yup.string().required('address is required'),
  age: Yup.number()
    .min(18, 'age should be equal or above 18')
    .required('age is required')
});

const handleSubmit = (values, { props, resetForm }) => {
  props.addEmployee(values);
  resetForm({});
};
const formikEnhancer = withFormik({
  validationSchema: UserSchema,
  mapPropsToValues: () => ({
    firstName: '',
    middleName: '',
    lastName: '',
    address: '',
    age: ''
  }),
  handleSubmit
});

const UserForm = props => {
  const { handleReset, isSubmitting } = props;

  return (
    <Section>
      <form onSubmit={handleSubmit}>
        <Part>
          <Row>
            <Fields>
              <label className="itemLabel" htmlFor="firstName">
                First Name *
              </label>
              <Field type="text" name="firstName" placeholder="first name" />
              <ErrorMessage component={ErrorLabel} name="firstName" />
            </Fields>
            <Fields>
              <label className="itemLabel" htmlFor="middleName">
                Middle Name*
              </label>
              <Field type="text" name="middleName" placeholder="middle name" />
              <ErrorMessage component={ErrorLabel} name="middleName" />
            </Fields>
            <Fields>
              <label className="itemLabel" htmlFor="lastName">
                Last Name *
              </label>
              <Field type="text" name="lastName" placeholder="last name" />
              <ErrorMessage component={ErrorLabel} name="lastName" />
            </Fields>
          </Row>
          <Row>
            <Fields>
              <label className="itemLabel" htmlFor="address">
                Address *
              </label>
              <Field type="text" name="address" placeholder="address" />
              <ErrorMessage component={ErrorLabel} name="address" />
            </Fields>
          </Row>
          <Row>
            <Fields>
              <label className="itemLabel" htmlFor="age">
                Age *
              </label>
              <Field type="number" name="age" placeholder="age" />
              <ErrorMessage component={ErrorLabel} name="age" />
            </Fields>
            <Fields>
              <label className="itemLabel" htmlFor="gender">
                Gender *
              </label>
              <Field component="select" name="gender">
                <option value="male">Male</option>
                <option value="female">Female</option>
              </Field>
            </Fields>
          </Row>
          <ButtonsGroup>
            <Button type="submit" success disabled={isSubmitting}>
              Submit
            </Button>
            <Button type="button" danger onClick={handleReset}>
              Clear
            </Button>
          </ButtonsGroup>
        </Part>
      </form>
    </Section>
  );
};

UserForm.propTypes = {
  handleReset: PropTypes.func.isRequired,
  isSubmitting: PropTypes.bool.isRequired
};

const enhanceForm = formikEnhancer(UserForm);

export default enhanceForm;
