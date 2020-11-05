import React, { useState, useEffect } from 'react';
import { redirectTo } from '@reach/router';
import { Formik } from 'formik';
import checkInValidationSchema from './checkInValidationSchema';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FormField from './FormField';
import FormSelect from './FormSelect';
import FormExtrFiedls from './FormExtraFields';

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

const CheckInForm = () => {
  const isAllowed = localStorage.getItem('step1');
  if (!isAllowed) {
    redirectTo('/');
  }

  const classes = useStyles();
  const { firstName, lastName } = JSON.parse(localStorage.getItem('user'));
  const [extraFields, setExtraFields] = useState(false);
  const [nationality, setNationality] = useState('');

  useEffect(() => {
    const needExtraFields = ['austria', 'belgium', 'france', 'greece', 'spain'];
    needExtraFields.includes(nationality)
      ? setExtraFields(true)
      : setExtraFields(false);
  }, [nationality]);

  return (
    <>
      <h1 className={classes.headline}>
        Hello {firstName} {lastName} 👋
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
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={checkInValidationSchema}
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
          setNationality(values.nationality);
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
                error={errors.nationality && touched.nationality}
                name="nationality"
                value={values.nationality}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={
                  errors.nationality &&
                  touched.nationality &&
                  errors.nationality
                }
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
                  nationality={nationality}
                  values={values}
                  errors={errors}
                  touched={touched}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              )}
              <Button
                variant="contained"
                className={classes.button}
                type="submit"
                disabled={isSubmitting}
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
