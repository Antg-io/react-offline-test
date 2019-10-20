import React from 'react';
import { render } from '@testing-library/react';
import Header from '../index';

it('renders <Header /> with a title inferred from the props', () => {
  const testTitleProp = 'foo bar';
  const { getByTestId } = render(<Header title={testTitleProp} />);
  const elem = getByTestId('components/Layout/Header@title');
  expect(elem.innerHTML).toBe(testTitleProp);
});
