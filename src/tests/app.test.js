import React from 'react';
import { render } from '@testing-library/react';
import { App } from '../App';
import testData from '../../example_api_response.json';

it('renders the app with loading', () => {
  const { queryAllByTestId } = render(
    <App dataError={null} fuels={[]} loading={true} title="test" />
  );

  expect(queryAllByTestId('app/loading').length).toBe(1);
});

it('renders the app with the Info Bar and Fuel Unicorn', () => {
  const { from, generationmix: fuels, to } = testData.data;

  const { queryAllByTestId } = render(
    <App
      dataError={null}
      loading={false}
      from={from}
      fuels={fuels}
      title="test"
      to={to}
    />
  );

  expect(queryAllByTestId('app/loading').length).toBe(0);
  expect(queryAllByTestId('components/InfoBar').length).toBe(1);
  expect(queryAllByTestId('components/FuelUnicorn').length).toBe(1);
});
