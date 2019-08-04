import React from 'react';
import { AppLink } from '@mixspa/react';
import classNames from 'classnames/bind';
import styles from './HomePage.scss';

let cx = classNames.bind(styles);

const HomePage = () => (
  <div className={ cx('home') }>
    <div className={ cx('title') }>HomePage</div>
    <div>
      <div className={ cx('react') }>
        <AppLink className={ cx('link') } base="/mixspa-example/react-apps" to="/">React App Home</AppLink>
        <AppLink className={ cx('link') } base="/mixspa-example/react-apps" to="/app-one">React App One</AppLink>
        <AppLink className={ cx('link') } base="/mixspa-example/react-apps" to="/app-two">React App Two</AppLink>
      </div>
      <div className={ cx('vue') }>
        <AppLink className={ cx('link') } base="/mixspa-example/vue-apps" to="/">Vue App Home</AppLink>
        <AppLink className={ cx('link') } base="/mixspa-example/vue-apps" to="/app-one">Vue App One</AppLink>
        <AppLink className={ cx('link') } base="/mixspa-example/vue-apps" to="/app-two">Vue App Two</AppLink>
      </div>
    </div>
  </div>
);

export default HomePage;
