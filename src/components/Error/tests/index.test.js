import React from 'react';
import { render } from '@testing-library/react';
import Error from '../index';

const dataError = {
  message: "The api's gone a bit Pete Tong",
  statusCode: 500,
};
it('renders <Error /> with a message', () => {
  const { queryAllByTestId, findByText } = render(
    <Error dataError={dataError} />
  );
  expect(queryAllByTestId('components/Error').length).toBe(1);
  expect(findByText(dataError.message));
});
