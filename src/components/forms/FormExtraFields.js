import React from 'react';
import FormField from './FormField';

const FormExtraFields = ({
  nationality,
  errors,
  touched,
  values,
  onChange,
  onBlur,
}) => {
  const extraFields = {
    austria: ['country', 'city', 'passportExpiryDate'],
    belgium: ['birthDate', 'country', 'city', 'address'],
    france: ['birthDate', 'birthPlace', 'country', 'city'],
    greece: [
      'passportIssueLocation',
      'passportIssueDate',
      'passportExpiryDate',
    ],
    spain: ['address'],
  };

  return (
    <>
      {extraFields[nationality].map((field) => {
        return (
          <FormField
            key={field}
            error={errors[field] && touched[field]}
            label={field}
            name={field}
            value={values[field]}
            onChange={onChange}
            onBlur={onBlur}
            helperText={errors[field] && touched[field] && errors[field]}
          />
        );
      })}
    </>
  );
};

export default FormExtraFields;
