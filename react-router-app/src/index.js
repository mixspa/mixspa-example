import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import MixspaLoader from '@mixspa/loader';
import { BrowserRouter } from 'react-router-dom';
import App from './pages/App';

MixspaLoader.addAppInfo({
  tag: 'react-nav-app',
  name: 'ReactNavApp',
  assets: ['../react-nav-app/react-nav-app.bundle.js']
});

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('app')
);
