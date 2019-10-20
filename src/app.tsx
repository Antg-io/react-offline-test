import React from 'react';

import PropTypes, { InferProps } from 'prop-types';
import withLayout from './HOC/withLayout/withLayout';
import withData from './HOC/withData/withData';

import Error from './components/Error';
import './app.css';
import InfoBar from './components/InfoBar';
import FuelUnicorn from './components/FuelUnicorn';

const AppProps = {
  dataError: PropTypes.oneOf([PropTypes.object, PropTypes.bool]),
  from: PropTypes.string,
  fuels: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  to: PropTypes.string,
};

export const App: React.FC = ({
  from,
  fuels,
  to,
  dataError,
  loading,
}: InferProps<typeof AppProps>) => (
  <div className="App">
    {loading && <h1 data-testid="app/loading">Loading ...</h1>}
    {from && to && <InfoBar from={from} to={to} />}
    {fuels && fuels.length > 1 && <FuelUnicorn fuels={fuels} />}
    {dataError && <Error dataError={dataError} />}
  </div>
);

App.propTypes = AppProps;

export default withLayout(withData(App));
