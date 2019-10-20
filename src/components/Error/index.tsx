import React from 'react';
import PropTypes, { InferProps } from 'prop-types';

const ErrorProps = {
  dataError: PropTypes.object.isRequired,
};

const Error: React.FC<{ dataError: object }> = ({
  dataError,
}: InferProps<typeof ErrorProps>) => (
  <div data-testid="components/Error">
    <h1>Opps. No Unicorns available</h1>
    <p>Data Unavailable</p>
    <p>
      <strong>Error details</strong>
      {JSON.stringify(dataError)}
    </p>
  </div>
);

Error.propTypes = ErrorProps;

export default Error;
