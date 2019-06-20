import Mixspa from '@mixspa/core';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import appList from './data/appList.json';

import './index.scss';

appList.forEach(app => Mixspa.register(app));

Mixspa.on('mixspa:url:changed', (url) => {
  console.log('1: url will nav to: ' + url);
});

ReactDOM.render(
  <BrowserRouter basename="/mixspa-example">
    <App baseUrl={ "/mixspa-example" } />
  </BrowserRouter>,
  document.getElementById('app')
);
