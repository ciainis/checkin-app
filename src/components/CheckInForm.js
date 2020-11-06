import React from 'react';
import { redirectTo, navigate } from '@reach/router';
import axios from 'axios';
import { Formik } from 'formik';
import { checkInSchema } from './validationSchema';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FormField from './FormField';
import FormSelect from './FormSelect';
import FormExtrFiedls from './FormExtraFields';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles({
  headline: {
    color: '#2B4779',
    textAlign: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '3.5rem',
  },
  button: {
    marginTop: '1.5rem',
    fontSize: '1rem',
    color: '#2B4779',
    backgroundColor: '#F0C845',
  },
});

const needExtraFields = ['austria', 'belgium', 'france', 'greece', 'spain'];

const CheckInForm = () => {
  const isAllowed = localStorage.getItem('step1');
  if (!isAllowed) {
    redirectTo('/');
  }

  const classes = useStyles();
  const { firstName, lastName } = JSON.parse(localStorage.getItem('user'));

  return (
    <>
      <h1 className={classes.headline}>
        Hello {firstName} {lastName}{' '}
        <span role="img" aria-label="waving hand emoji">
          👋
        </span>
      </h1>
      <Formik
        initialValues={{
          firstName,
          lastName,
          nationality: '',
          email: '',
          phoneNumber: '',
          passport: '',
          passportExpiryDate: '',
          passportIssueDate: '',
          passportIssueLocation: '',
          birthDate: '',
          birthPlace: '',
          country: '',
          city: '',
          address: '',
          checked: false,
        }}
        onSubmit={() => {
          axios
            .post('https://app.fakejson.com/q', {
              token: process.env.FAKEJSONTOKEN,
              data: {
                status: 'OK',
              },
            })
            .then(() => {
              localStorage.setItem('step2', true);
              navigate('/confirmation');
            })
            .catch((err) => console.log(err));
        }}
        validationSchema={checkInSchema}
      >
        {(props) => {
          const {
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          } = props;

          const extraFields = needExtraFields.includes(values.nationality);

          return (
            <form className={classes.form} onSubmit={handleSubmit}>
              <FormField
                error={errors.firstName && touched.firstName}
                label={'First Name'}
                name={'firstName'}
                value={values.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={
                  errors.firstName && touched.firstName && errors.firstName
                }
              />
              <FormField
                error={errors.lastName && touched.lastName}
                label={'Last Name'}
                name={'lastName'}
                value={values.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={
                  errors.lastName && touched.lastName && errors.lastName
                }
              />
              <FormSelect
                name="nationality"
                value={values.nationality}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <FormField
                error={errors.email && touched.email}
                label={'Email'}
                name={'email'}
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={errors.email && touched.email && errors.email}
              />
              <FormField
                error={errors.phoneNumber && touched.phoneNumber}
                label={'Phone Number'}
                name={'phoneNumber'}
                value={values.phoneNumber}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={
                  errors.phoneNumber &&
                  touched.phoneNumber &&
                  errors.phoneNumber
                }
              />
              <FormField
                error={errors.passport && touched.passport}
                label={'Passport'}
                name={'passport'}
                value={values.passport}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={
                  errors.passport && touched.passport && errors.passport
                }
              />
              {extraFields && (
                <FormExtrFiedls
                  nationality={values.nationality}
                  values={values}
                  errors={errors}
                  touched={touched}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              )}
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={values.checked}
                      onChange={handleChange}
                      name="checked"
                    />
                  }
                  label="Terms & conditions"
                />
              </FormGroup>
              <Button
                variant="contained"
                className={classes.button}
                type="submit"
                disabled={isSubmitting || !values.checked}
              >
                Continue
              </Button>
            </form>
          );
        }}
      </Formik>
    </>
  );
};

export default CheckInForm;
