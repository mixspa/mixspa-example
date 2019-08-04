import React from 'react';
import { AppLink } from '@mixspa/react';
import classNames from 'classnames/bind';

import styles from './HomePage.scss';

let cx = classNames.bind(styles);

const HomePage = () => (
  <div className={ cx('home') }>
    <div>Home Page</div>
    <AppLink base="/mixspa-example/vue-apps" to="/">Vue App Home</AppLink>
  </div>
);

export default HomePage;
