import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import MixspaApp from '@mixspa/app';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

MixspaApp.define({
  name: 'react-nav-app',
  render: (parentEl) => {
    ReactDOM.render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
      parentEl
    );
  },
  unmount: (parentEl) => {
    ReactDOM.unmountComponentAtNode(parentEl);
  }
});
