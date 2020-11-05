import React from 'react';
import { Formik } from 'formik';
import { navigate } from '@reach/router';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { flighSearchSchema } from './validationSchema';
import axios from 'axios';

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
  field: {
    marginBottom: '1.5rem',
  },
  label: {
    color: '#2B4779',
  },
  button: {
    marginTop: '1.5rem',
    fontSize: '1rem',
    color: '#2B4779',
    backgroundColor: '#F0C845',
  },
});

const FlightSearch = () => {
  const classes = useStyles();

  return (
    <>
      <h1 className={classes.headline}>Welcome to your web check-in!</h1>
      <Formik
        initialValues={{ flightNumber: '', lastName: '' }}
        onSubmit={({ flightNumber, lastName }) =>
          axios
            .post('https://app.fakejson.com/q', {
              token: 'NuE06Dw8hMe60V70cDOHJw',
              data: {
                flightNumber,
                lastName,
                firstName: 'nameFirst',
              },
            })
            .then(({ data }) => {
              const user = {
                firstName: data.firstName,
                lastName: data.lastName,
              };
              localStorage.user = JSON.stringify(user);
              localStorage.setItem('step1', true);
              navigate('/checkin');
            })
            .catch((err) => console.log(err))
        }
        validationSchema={flighSearchSchema}
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
          return (
            <form className={classes.form} onSubmit={handleSubmit}>
              <TextField
                className={classes.field}
                error={errors.flightNumber && touched.flightNumber}
                label="Flight Number"
                name="flightNumber"
                value={values.flightNumber}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={
                  errors.flightNumber &&
                  touched.flightNumber &&
                  errors.flightNumber
                }
                InputLabelProps={{
                  classes: {
                    root: classes.label,
                  },
                }}
              />
              <TextField
                className={classes.field}
                error={errors.lastName && touched.lastName}
                label="Last Name"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={
                  errors.lastName && touched.lastName && errors.lastName
                }
                InputLabelProps={{
                  classes: {
                    root: classes.label,
                  },
                }}
              />
              <Button
                variant="contained"
                className={classes.button}
                type="submit"
                disabled={isSubmitting}
              >
                Submit
              </Button>
            </form>
          );
        }}
      </Formik>
    </>
  );
};

export default FlightSearch;
