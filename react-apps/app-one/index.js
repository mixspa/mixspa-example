import '@babel/polyfill';
import React from 'react';
import { createApp } from '@mixspa/react';
import App from './App';

createApp(
  'react-app-one',
  () => <App />
);
