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
        <AppLoader appId="react-nav-app" baseUrl={ baseUrl }><Loading/></AppLoader>
      </div>
      <div className={ cx('content') }>
        <Switch>
          <Route exact path={ `${baseUrl}` }><HomePage /></Route>
          <Route path={ `${baseUrl}app-one` } >
            <AppLoader appId="react-app-one"><Loading/></AppLoader>
          </Route>
          <Route path={ `${baseUrl}app-two` } >
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
