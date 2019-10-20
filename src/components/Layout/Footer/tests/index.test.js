import React from 'react';
import { render } from '@testing-library/react';
import Footer from '../index';

it('renders <Footer /> with a text formed of `Candidate` followed by an email address', () => {
  const { queryAllByTestId } = render(<Footer />);

  expect(queryAllByTestId('components/Layout/Footer').length).toBe(1);
  expect(queryAllByTestId('components/Layout/Footer@text').length).toBe(1);
  expect(queryAllByTestId('components/Layout/Footer@email').length).toBe(1);
});
