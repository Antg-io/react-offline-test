import React from 'react';
import { render } from '@testing-library/react';
import withData from '../withData';

const MockApp = ({}) => '<div>Hello World</div>';

it('renders the wrapped component with from, to and fuels', () => {
  const AppWithData = withData(MockApp);

  const { container } = render(<AppWithData>Hello World</AppWithData>);
  expect(container.innerHTML).toContain('Hello World');
});
