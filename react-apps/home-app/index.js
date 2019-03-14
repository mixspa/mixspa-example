import '@babel/polyfill';
import React from 'react';
import { createApp, EventHolder } from '@mixspa/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

createApp(
  'react-home-app',
  ({ baseUrl }) => (
    <BrowserRouter basename={ baseUrl }>
      <EventHolder>
        <App />
      </EventHolder>
    </BrowserRouter>
  )
);
