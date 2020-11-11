import React from 'react';
import { Router } from '@reach/router';
import Layout from './Layout';
import FlightSearchForm from './forms/FlightSearchForm';
import CheckInForm from './forms/CheckInForm';
import Confirmation from './Confirmation';

const App = () => {
  return (
    <Layout>
      <Router>
        <FlightSearchForm path="/" />
        <CheckInForm path="/checkin" />
        <Confirmation path="/confirmation" />
      </Router>
    </Layout>
  );
};

export default App;
