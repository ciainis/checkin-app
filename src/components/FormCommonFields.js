import React from 'react';
import FormField from './FormField';
import FormSelect from './FormSelect';

const CommonFields = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
}) => {
  const fields = [
    'firstName',
    'lastName',
    'nationality',
    'email',
    'phoneNumber',
    'passport',
  ];

  return (
    <>
      {fields.map((field) => {
        if (field === 'nationality') {
          return (
            <FormSelect
              name={field}
              value={values[field]}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          );
        } else {
          return (
            <FormField
              key={field}
              error={errors[field] && touched[field]}
              label={field}
              name={field}
              value={values[field]}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={errors[field] && touched[field] && errors[field]}
            />
          );
        }
      })}
    </>
  );
};

export default CommonFields;
