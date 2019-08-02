import React from 'react';
import { createApp } from '@mixspa/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

createApp(
  'react-home-app',
  ({ baseurl }) => {
    console.log("render react home with base url: " + baseurl);
    return (
      <BrowserRouter basename={ baseurl }>
        <App baseUrl={ baseurl }/>
      </BrowserRouter>
    );
  }
);
