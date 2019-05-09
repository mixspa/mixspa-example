import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AppLoader } from '@mixspa/react';
import Loading from './Loading';
import HomePage from './HomePage';
import classNames from 'classnames/bind';
import styles from './App.scss';

let cx = classNames.bind(styles);

const App = () => {
  return (
    <div className={ cx('app') }>
      <div className={ cx('nav') }>
        <AppLoader appId="react-nav-app" baseUrl='/mixspa-example/'><Loading/></AppLoader>
      </div>
      <div className={ cx('content') }>
        <Switch>
          <Route exact path='/mixspa-example/'><HomePage /></Route>
          <Route path='/app-one' >
            <AppLoader appId="react-app-one" baseUrl="/mixspa-example/app-one"><Loading/></AppLoader>
          </Route>
          <Route path='/app-two' >
            <AppLoader appId="react-app-two" baseUrl="/mixspa-example/app-two"><Loading/></AppLoader>
          </Route>
        </Switch>
      </div>
    </div>
  )
};

export default App;
