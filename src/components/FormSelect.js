import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
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

const options = ['austria', 'germany', 'france', 'belgium', 'spain', 'greece'];

const FormSelect = ({ errors, name, value, onChange, onBlur, helperText }) => {
  const classes = useStyles();

  return (
    <FormControl>
      <InputLabel className={classes.label} htmlFor="nationality">
        Nationality
      </InputLabel>
      <Select
        native
        className={classes.field}
        error={errors}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        helperText={helperText}
        InputProps={{
          id: 'nationality',
        }}
      >
        <option className={classes.input} aria-label="None" value="" />
        {options.map((option, index) => (
          <option key={index} clasName={classes.input} value={option}>
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </option>
        ))}
      </Select>
    </FormControl>
  );
};

export default FormSelect;
