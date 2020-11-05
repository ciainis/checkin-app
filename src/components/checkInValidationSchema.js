import * as Yup from 'yup';

export default Yup.object().shape({
  firstName: Yup.string().required('Please provide your first name'),
  lastName: Yup.string().required('Please provide your last name'),
  nationality: Yup.string().required('Please select your nationality'),
  phoneNumber: Yup.string().required('Please provide your phone number'),
  email: Yup.string().email().required('Please provide your email'),
  passport: Yup.string().required('Please provide your passport number'),
  passportExpiryDate: Yup.string().when('nationality', {
    is: (val) => val === 'austria' || val === 'greece',
    then: Yup.string().required('Please provide your passport expiry date'),
  }),
  passportIssueDate: Yup.string().when('nationality', {
    is: 'greece',
    then: Yup.string().required('Please provide your passport expiry date'),
  }),
  passportIssueLocation: Yup.string().when('nationality', {
    is: 'greece',
    then: Yup.string().required('Please provide your passport expiry date'),
  }),
  city: Yup.string().when('nationality', {
    is: (val) => val === 'austria' || val === 'belgium' || val === 'france',
    then: Yup.string().required('Please provide your city of residence'),
  }),
  country: Yup.string().when('nationality', {
    is: (val) => val === 'austria' || val === 'belgium' || val === 'france',
    then: Yup.string().required('Please provide your city of residence'),
  }),
  birthDate: Yup.string().when('nationality', {
    is: (val) => val === 'france' || val === 'belgium',
    then: Yup.string().required('Please provide your birth date'),
  }),
  birthPlace: Yup.string().when('nationality', {
    is: 'france',
    then: Yup.string().required('Please provide your birth place'),
  }),
  address: Yup.string().when('nationality', {
    is: (val) => val === 'belgium' || val === 'spain',
    then: Yup.string().required('Please provide your birth place'),
  }),
});
