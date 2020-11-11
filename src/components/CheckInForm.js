import React from 'react';
import { redirectTo, navigate } from '@reach/router';
import axios from 'axios';
import { Formik } from 'formik';
import { checkInSchema } from './validationSchema';
import {
  makeStyles,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Button,
} from '@material-ui/core';
import FormExtrFiedls from './FormExtraFields';
import FormCommonFields from './FormCommonFields';

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
          nationality: 'austria',
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
              <FormCommonFields
                values={values}
                errors={errors}
                touched={touched}
                handleChange={handleChange}
                handleBlur={handleBlur}
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
