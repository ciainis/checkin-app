import * as Yup from 'yup';

export default Yup.object().shape({
  flightNumber: Yup.string().required('Please provide the flight number'),
  lastName: Yup.string().required('Please provide your last name'),
});
