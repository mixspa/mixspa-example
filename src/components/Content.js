import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import { AppLoader } from '@mixspa/react';
import Loading from './Loading';
import HomePage from './HomePage';
import classNames from 'classnames/bind';

import styles from './Loading.scss';

let cx = classNames.bind(styles);

const Content = ({ baseUrl, entries }) => (
  <div className={ cx('content') }>
    <Switch>
      <Route exact path="/"><HomePage /></Route>
      {
        entries.map(entry => (
          <Route key={ entry.id } path={ entry.url } >
            <AppLoader appId={ entry.id } baseUrl={ `${baseUrl}${entry.url}` }><Loading/></AppLoader>
          </Route>
        ))
      }
    </Switch>
  </div>
);

Content.propTypes = {
  entries: PropTypes.array.isRequired,
  baseUrl: PropTypes.string.isRequired
};

export default Content;
