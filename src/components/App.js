import React from 'react';
import { Router } from '@reach/router';
import Layout from './Layout';
import FlightSearch from './FlightSearch';
import CheckInForm from './CheckInForm';
import Confirmation from './Confirmation';

const App = () => {
  return (
    <Layout>
      <Router>
        <FlightSearch path="/" />
        <CheckInForm path="/checkin" />
        <Confirmation path="/confirmation" />
      </Router>
    </Layout>
  );
};

export default App;
