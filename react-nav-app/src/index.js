import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import MixspaApp from '@mixspa/app';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

MixspaApp.define({
  tag: 'react-nav-app',
  render: (parentEl) => {
    let url = parentEl.getAttribute('baseUrl') || '';
    ReactDOM.render(
      <BrowserRouter basename={url}>
        <App />
      </BrowserRouter>,
      parentEl
    );
  },
  unmount: (parentEl) => {
    ReactDOM.unmountComponentAtNode(parentEl);
  }
});
