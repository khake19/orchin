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

const onSubmit = (values, { props, resetForm }) => {
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
  handleSubmit: onSubmit
});

const UserForm = props => {
  const { handleSubmit, handleReset, isSubmitting, values } = props;
  return (
    <Section>
      <form onSubmit={handleSubmit}>
        <Part>
          <Row>
            <Fields>
              <label className="itemLabel" htmlFor="firstName">
                First Name *
              </label>
              <Field
                type="text"
                name="firstName"
                placeholder="first name"
                value={values.firstName || ''}
              />
              <ErrorMessage component={ErrorLabel} name="firstName" />
            </Fields>
            <Fields>
              <label className="itemLabel" htmlFor="middleName">
                Middle Name*
              </label>
              <Field
                type="text"
                name="middleName"
                placeholder="middle name"
                value={values.middleName || ''}
              />
              <ErrorMessage component={ErrorLabel} name="middleName" />
            </Fields>
            <Fields>
              <label className="itemLabel" htmlFor="lastName">
                Last Name *
              </label>
              <Field
                type="text"
                name="lastName"
                placeholder="last name"
                value={values.lastName || ''}
              />
              <ErrorMessage component={ErrorLabel} name="lastName" />
            </Fields>
          </Row>
          <Row>
            <Fields>
              <label className="itemLabel" htmlFor="address">
                Address *
              </label>
              <Field
                type="text"
                name="address"
                placeholder="address"
                value={values.address || ''}
              />
              <ErrorMessage component={ErrorLabel} name="address" />
            </Fields>
          </Row>
          <Row>
            <Fields>
              <label className="itemLabel" htmlFor="age">
                Age *
              </label>
              <Field
                type="number"
                name="age"
                placeholder="age"
                value={values.age || ''}
              />
              <ErrorMessage component={ErrorLabel} name="age" />
            </Fields>
            <Fields>
              <label className="itemLabel" htmlFor="gender">
                Gender *
              </label>
              <Field
                component="select"
                name="gender"
                placeholder="gender"
                value={values.gender || ''}
              >
                <option value="MALE">Male</option>
                <option value="FEMALE">Female</option>
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
  handleSubmit: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
  values: PropTypes.shape().isRequired
};

const enhanceForm = formikEnhancer(UserForm);

export default enhanceForm;
