import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.tsx';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App title="KiwiPower Tech Test" />,
    document.getElementById('reactMountPoint')
  );
});
