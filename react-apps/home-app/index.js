import '@babel/polyfill';
import React from 'react';
import { createApp, EventHolder } from '@mixspa/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

createApp(
  'react-home-app',
  ({ baseurl }) => {
    console.log("render react with base url: " + baseurl);
    return (
      <BrowserRouter basename={ baseurl }>
        <EventHolder>
          <App baseUrl={ baseurl }/>
        </EventHolder>
      </BrowserRouter>
    );
  }
);
