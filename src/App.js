import React from 'react';
import { render } from 'react-dom';
import { Router } from '@reach/router';
import Layout from './components/Layout';
import FlightSearch from './components/FlightSearch';
import CheckInForm from './components/CheckInForm';
import Confirmation from './components/Confirmation';

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

render(<App />, document.getElementById('root'));
