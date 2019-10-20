import React from 'react';
import PropTypes, { InferProps } from 'prop-types';
import UnicornPukeStream from '../UnIcornPukeStream';
import { unicornPukeColours } from '../../kiwipower.theme';

const unicornProps = {
  fuels: PropTypes.arrayOf(
    PropTypes.shape({
      fuel: PropTypes.string,
      perc: PropTypes.number,
    })
  ).isRequired,
};

const FuelUnicorn: React.FC<InferProps<typeof unicornProps>> = ({
  fuels,
}: InferProps<typeof unicornProps>) => (
  <div data-testid="components/FuelUnicorn">
    {fuels &&
      fuels.map(({ fuel, perc }, index) => (
        <UnicornPukeStream
          key={fuel}
          data-testid="component/FullUnicorn@stream"
          color={Object.values(unicornPukeColours)[index] || 'white'}
          fuel={fuel}
          percentage={perc}
        />
      ))}
  </div>
);

FuelUnicorn.propTypes = unicornProps;

export default FuelUnicorn;
