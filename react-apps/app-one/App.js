import React from 'react';
import { AppLink } from '@mixspa/react';
import classNames from 'classnames/bind';
import styles from './App.scss';

let cx = classNames.bind(styles);

const App = () => (
  <div className={ cx('app') }>
    <div>I am App One</div>
    <AppLink base="/mixspa-example/vue-apps" to="/app-one">Vue App One</AppLink>
  </div>
);

export default App;
