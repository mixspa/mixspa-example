import React from 'react';
import classNames from 'classnames/bind';

import styles from './HomePage.scss';

let cx = classNames.bind(styles);

const HomePage = () => (
  <div className={ cx('home') }>Home Page</div>
);

export default HomePage;
