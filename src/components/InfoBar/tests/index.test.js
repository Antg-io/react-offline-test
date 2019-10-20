import React from 'react';
import { render } from '@testing-library/react';
import InfoBar, { formattedDate } from '../index';

import testData from '../../../../example_api_response.json';

it('renders <InfoBar /> with the to and from date', () => {
  const { queryAllByTestId } = render(
    <InfoBar to={testData.data.to} from={testData.data.from} />
  );
  expect(queryAllByTestId('components/InfoBar').length).toBe(1);
});

it('`formatDate` renders `INVALID DATE` when give a none date string the to and from date', () => {
  expect(formattedDate('foo bar')).toBe('INVALID DATE');
});
