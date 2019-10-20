import React from 'react';
import { render } from '@testing-library/react';
import FuelUnicorn from '../index';

import testData from '../../../../example_api_response.json';

it('renders <FuelUnicorn /> with data', () => {
  const { queryAllByTestId } = render(
    <FuelUnicorn fuels={testData.data.generationmix} />
  );
  expect(queryAllByTestId('components/FuelUnicorn').length).toBe(1);
});

it('renders with unicorn Pustreamsd', () => {
  const { queryAllByTestId } = render(
    <FuelUnicorn fuels={testData.data.generationmix} />
  );
  expect(queryAllByTestId('components/UnicornPukeStream').length).toBe(
    testData.data.generationmix.length
  );
});
