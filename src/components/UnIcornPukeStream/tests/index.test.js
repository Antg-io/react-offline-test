import React from 'react';
import { render } from '@testing-library/react';
import UnicornPukeStream from '../index';
import { unicornPukeColours } from '../../../kiwipower.theme';

import testData from '../../../../example_api_response.json';

const testFuel = testData.data.generationmix[0];

it('renders <Unicorn PukeStream /> with data', () => {
  const { queryAllByTestId } = render(
    <UnicornPukeStream
      color={unicornPukeColours.upGreenLight}
      fuel={testFuel.fuel}
      percentage={testFuel.perc}
    />
  );
  expect(queryAllByTestId('components/UnicornPukeStream').length).toBe(1);
});

it('renders streams with heights', async () => {
  const { queryAllByTestId } = render(
    <>
      <UnicornPukeStream
        color={unicornPukeColours.upGreenLight}
        fuel={testFuel.fuel}
        percentage={10}
      />
      <UnicornPukeStream
        color={unicornPukeColours.upGreenLight}
        fuel={testFuel.fuel}
        percentage={20}
      />
    </>
  );

  const fuels = await queryAllByTestId('components/UnicornPukeStream');

  expect(parseInt(fuels[0].getAttribute('height'))).toBeLessThan(
    parseInt(fuels[1].getAttribute('height'))
  );
});
