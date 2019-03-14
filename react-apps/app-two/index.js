import '@babel/polyfill';
import React from 'react';
import { createApp } from '@mixspa/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.scss';

createApp(
  'react-app-two',
  ({ baseUrl }) => (
    <BrowserRouter basename={ baseUrl }>
      <App />
    </BrowserRouter>
  )
);
