import '@babel/polyfill';
import React from 'react';
import { createApp } from '@mixspa/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

createApp(
  'react-nav-app',
  ({ baseurl }) => (
    <BrowserRouter basename={ baseurl }>
      <App />
    </BrowserRouter>
  )
);
