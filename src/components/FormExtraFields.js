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
  switch (nationality) {
    case 'austria':
      return (
        <>
          <FormField
            error={errors.country && touched.country}
            label={'Country'}
            name={'country'}
            value={values.country}
            onChange={onChange}
            onBlur={onBlur}
            helperText={errors.country && touched.country && errors.country}
          />
          <FormField
            error={errors.city && touched.city}
            label={'City'}
            name={'city'}
            value={values.city}
            onChange={onChange}
            onBlur={onBlur}
            helperText={errors.city && touched.city && errors.city}
          />
          <FormField
            error={errors.passportExpiryDate && touched.passportExpiryDate}
            label={'Passport Expiry Date'}
            name={'passportExpiryDate'}
            value={values.passportExpiryDate}
            onChange={onChange}
            onBlur={onBlur}
            helperText={
              errors.passportExpiryDate &&
              touched.passportExpiryDate &&
              errors.passportExpiryDate
            }
          />
        </>
      );

    case 'belgium':
      return (
        <>
          <FormField
            error={errors.birthDate && touched.birthDate}
            label={'Birth Date'}
            name={'birthDate'}
            value={values.birthDate}
            onChange={onChange}
            onBlur={onBlur}
            helperText={
              errors.birthDate && touched.birthDate && errors.birthDate
            }
          />
          <FormField
            error={errors.country && touched.country}
            label={'Country'}
            name={'country'}
            value={values.country}
            onChange={onChange}
            onBlur={onBlur}
            helperText={errors.country && touched.country && errors.country}
          />
          <FormField
            error={errors.city && touched.city}
            label={'City'}
            name={'city'}
            value={values.city}
            onChange={onChange}
            onBlur={onBlur}
            helperText={errors.city && touched.city && errors.city}
          />
          <FormField
            error={errors.address && touched.address}
            label={'Address'}
            name={'address'}
            value={values.address}
            onChange={onChange}
            onBlur={onBlur}
            helperText={errors.address && touched.address && errors.address}
          />
        </>
      );

    case 'france':
      return (
        <>
          <FormField
            error={errors.birthDate && touched.birthDate}
            label={'Birth Date'}
            name={'birthDate'}
            value={values.birthDate}
            onChange={onChange}
            onBlur={onBlur}
            helperText={
              errors.birthDate && touched.birthDate && errors.birthDate
            }
          />
          <FormField
            error={errors.birthPlace && touched.birthPlace}
            label={'Birth Place'}
            name={'birthPlace'}
            value={values.birthPlace}
            onChange={onChange}
            onBlur={onBlur}
            helperText={
              errors.birthPlace && touched.birthPlace && errors.birthPlace
            }
          />
          <FormField
            error={errors.country && touched.country}
            label={'Country'}
            name={'country'}
            value={values.country}
            onChange={onChange}
            onBlur={onBlur}
            helperText={errors.country && touched.country && errors.country}
          />
          <FormField
            error={errors.city && touched.city}
            label={'City'}
            name={'city'}
            value={values.city}
            onChange={onChange}
            onBlur={onBlur}
            helperText={errors.city && touched.city && errors.city}
          />
        </>
      );

    case 'greece':
      return (
        <>
          <FormField
            error={
              errors.passportIssueLocation && touched.passportIssueLocation
            }
            label={'Passport Issue Location'}
            name={'passportIssueLocation'}
            value={values.passportIssueLocation}
            onChange={onChange}
            onBlur={onBlur}
            helperText={
              errors.passportIssueLocation &&
              touched.passportIssueLocation &&
              errors.passportIssueLocation
            }
          />
          <FormField
            error={errors.passportIssueDate && touched.passportIssueDate}
            label={'Passport Issue Date'}
            name={'passportIssueDate'}
            value={values.passportIssueDate}
            onChange={onChange}
            onBlur={onBlur}
            helperText={
              errors.passportIssueDate &&
              touched.passportIssueDate &&
              errors.passportIssueDate
            }
          />
          <FormField
            error={errors.passportExpiryDate && touched.passportExpiryDate}
            label={'Passport Expiry Date'}
            name={'passportExpiryDate'}
            value={values.passportExpiryDate}
            onChange={onChange}
            onBlur={onBlur}
            helperText={
              errors.passportExpiryDate &&
              touched.passportExpiryDate &&
              errors.passportExpiryDate
            }
          />
        </>
      );

    case 'spain':
      return (
        <FormField
          error={errors.address && touched.address}
          label={'Address'}
          name={'address'}
          value={values.address}
          onChange={onChange}
          onBlur={onBlur}
          helperText={errors.address && touched.address && errors.address}
        />
      );

    default:
      return null;
  }
};

export default FormExtraFields;
