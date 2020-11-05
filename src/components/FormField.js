import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  field: {
    marginBottom: '1.5rem',
    color: '#2B4779',
  },
  label: {
    color: '#2B4779',
  },
  input: {
    color: '#2B4779',
  },
});

const FormField = ({
  error,
  label,
  name,
  value,
  onChange,
  onBlur,
  helperText,
}) => {
  const classes = useStyles();
  return (
    <TextField
      className={classes.field}
      error={error}
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      helperText={helperText}
      InputLabelProps={{
        classes: {
          root: classes.label,
        },
      }}
      InputProps={{
        classes: {
          root: classes.input,
        },
      }}
    />
  );
};

export default FormField;
