import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import { AppLoader } from '@mixspa/react';
import Menu from './Menu';
import Loading from './Loading';
import HomePage from './HomePage';
import classNames from 'classnames/bind';
import styles from './App.scss';
import entryList from '../data/entryList.json';

let cx = classNames.bind(styles);

const App = ({ baseUrl }) => {
  return (
    <div className={ cx('app') }>
      <div className={ cx('header') }>
        <Menu entries={ entryList }/>
      </div>
      <div className={ cx('content') }>
        <Switch>
          <Route exact path="/"><HomePage /></Route>
          {
            entryList.map(entry => (
              <Route key={ entry.id } path={ entry.url } >
                <AppLoader appId={ entry.id } baseUrl={ baseUrl }><Loading/></AppLoader>
              </Route>
            ))
          }
        </Switch>
      </div>
    </div>
  )
};

App.propTypes = {
  baseUrl: PropTypes.string
};

export default App;
