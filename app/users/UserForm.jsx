import React from 'react';
import PropTypes from 'prop-types';
import { Field, withFormik } from 'formik';
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

const onSubmit = values => console.log('hello there', values);

const formikEnhancer = withFormik({
  validationSchema: UserSchema,
  initialValues: { email: '' },
  handleSubmit: onSubmit
});

const UserForm = props => {
  const { touched, errors, handleSubmit } = props;

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
              {errors.firstName && touched.firstName ? (
                <ErrorLabel>{errors.firstName}</ErrorLabel>
              ) : null}
            </Fields>
            <Fields>
              <label className="itemLabel" htmlFor="middleName">
                Middle Name*
              </label>
              <Field type="text" name="middleName" placeholder="middle name" />
              {errors.middleName && touched.middleName ? (
                <ErrorLabel>{errors.middleName}</ErrorLabel>
              ) : null}
            </Fields>
            <Fields>
              <label className="itemLabel" htmlFor="lastName">
                Last Name *
              </label>
              <Field type="text" name="lastName" placeholder="last name" />
              {errors.lastName && touched.lastName ? (
                <ErrorLabel>{errors.lastName}</ErrorLabel>
              ) : null}
            </Fields>
          </Row>
          <Row>
            <Fields>
              <label className="itemLabel" htmlFor="address">
                Address *
              </label>
              <Field type="text" name="address" placeholder="address" />
              {errors.address && touched.address ? (
                <ErrorLabel>{errors.address}</ErrorLabel>
              ) : null}
            </Fields>
          </Row>
          <Row>
            <Fields>
              <label className="itemLabel" htmlFor="age">
                Age *
              </label>
              <Field type="number" name="age" placeholder="age" />
              {errors.age && touched.age ? (
                <ErrorLabel>{errors.age}</ErrorLabel>
              ) : null}
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
            <Button type="submit" success>
              Submit
            </Button>
            <Button type="button" danger>
              Clear
            </Button>
          </ButtonsGroup>
        </Part>
      </form>
    </Section>
  );
};

UserForm.propTypes = {
  touched: PropTypes.shape({}),
  errors: PropTypes.shape({}),
  handleSubmit: PropTypes.func.isRequired
};

UserForm.defaultProps = {
  touched: {},
  errors: {}
};

const enhanceForm = formikEnhancer(UserForm);

export default enhanceForm;
