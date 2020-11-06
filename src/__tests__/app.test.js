import React from 'react';
import { render, fireEvent, waitFor, cleanup } from '@testing-library/react';
import App from '../components/App.js';
import FlightSearch from '../components/FlightSearch';

afterEach(cleanup);

describe('the App component', () => {
  test('renders the form', () => {
    render(<App />);
  });
});

describe('the FlighSearch component', () => {
  it('renders the form', () => {
    render(<FlightSearch />);
  });

  it('gets the correct values', () => {
    const { container } = render(<FlightSearch />);
    const flightNumber = container.querySelector(
      '.MuiInputBase-input[name="flightNumber"]'
    );
    const lastName = container.querySelector(
      '.MuiInputBase-input[name="lastName"]'
    );

    fireEvent.change(flightNumber, { target: { value: '12345' } });
    fireEvent.change(lastName, { target: { value: 'Ciano' } });

    expect(flightNumber.value).toBe('12345');
    expect(lastName.value).toBe('Ciano');
  });

  // test not  working
  it('submits the form', async () => {
    const { getByTestId, container } = render(<FlightSearch />);
    const onSubmit = jest.fn();
    const button = getByTestId('button');
    const form = getByTestId('form');
    const flightNumber = container.querySelector(
      '.MuiInputBase-input[name="flightNumber"]'
    );
    const lastName = container.querySelector(
      '.MuiInputBase-input[name="lastName"]'
    );

    fireEvent.change(flightNumber, { target: { value: '12345' } });
    fireEvent.change(lastName, { target: { value: 'Ciano' } });
    fireEvent.click(button);
    fireEvent.submit(form);

    await waitFor(() => expect(onSubmit).toHaveBeenCalled());
  });
});
