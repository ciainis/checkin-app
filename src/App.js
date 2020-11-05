import React from 'react';
import { render } from 'react-dom';
import { Router } from '@reach/router';
import Layout from './components/Layout';
import FlightSearch from './components/FlightSearch';
import CheckInForm from './components/CheckInForm';

const App = () => {
  return (
    <Layout>
      <Router>
        <FlightSearch path="/" />
        <CheckInForm path="/checkin" />
      </Router>
    </Layout>
  );
};

render(<App />, document.getElementById('root'));
