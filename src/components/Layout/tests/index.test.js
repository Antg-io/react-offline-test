import React from 'react';
import { render } from '@testing-library/react';
import Layout from '../';

it('renders with the layout and children', () => {
  const { queryAllByTestId } = render(
    <Layout title="foo bar">
      <h1>Hello World</h1>
    </Layout>
  );

  expect(queryAllByTestId('components/Layout/Main').length).toBe(1);
  expect(queryAllByTestId('components/Layout/Footer').length).toBe(1);
});
