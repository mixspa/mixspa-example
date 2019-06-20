import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import { AppLoader } from '@mixspa/react';
import Loading from './Loading';
import HomePage from './HomePage';
import classNames from 'classnames/bind';
import styles from './App.scss';

let cx = classNames.bind(styles);

const App = ({ baseUrl }) => {
  return (
    <div className={ cx('app') }>
      <div className={ cx('nav') }>
        <AppLoader appId="react-nav-app" baseurl={ baseUrl }><Loading/></AppLoader>
      </div>
      <div className={ cx('content') }>
        <Switch>
          <Route exact path="/"><HomePage /></Route>
          <Route path="/app-one">
            <div>app-one</div>
            <AppLoader appId="react-app-one"><Loading/></AppLoader>
          </Route>
          <Route path="/app-two">
            <div>app-two</div>
            <AppLoader appId="react-app-two"><Loading/></AppLoader>
          </Route>
        </Switch>
      </div>
    </div>
  )
};

App.propTypes = {
  baseUrl: PropTypes.string
};

export default App;
