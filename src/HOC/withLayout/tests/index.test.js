import React from 'react';
import { render } from '@testing-library/react';
import withLayout from '../withLayout';

const MockApp = ({}) => '<div>Hello World</div>';

it('renders with the layout and children', () => {
  const AppWithLayout = withLayout(MockApp);
  const { queryAllByTestId } = render(
    <AppWithLayout title="foo bar">Hello World </AppWithLayout>
  );
  expect(queryAllByTestId('components/Layout').length).toBe(1);
});
