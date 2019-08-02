import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import Mixspa from '@mixspa/core';
import { AppLoader } from '@mixspa/react';
import Loading from './Loading';
import HomePage from './HomePage';
import classNames from 'classnames/bind';
import styles from './App.scss';

let cx = classNames.bind(styles);

class App extends React.Component {
  static propTypes = {
    baseUrl: PropTypes.string,
    history: PropTypes.object
  };

  componentDidMount() {
    Mixspa.onLink(url => {
      if (url.startsWith(this.props.baseUrl)) {
        console.log('react linked to: ' + url);
        this.props.history.push(url.substring(this.props.baseUrl.length));
      }
    });
  }

  render() {
    return (
      <div className={ cx('app') }>
        <div className={ cx('nav') }>
          <AppLoader appId="react-nav-app" baseurl={ this.props.baseUrl }><Loading/></AppLoader>
        </div>
        <div className={ cx('content') }>
          <Switch>
            <Route exact path="/"><HomePage /></Route>
            <Route path="/app-one">
              <AppLoader appId="react-app-one"><Loading/></AppLoader>
            </Route>
            <Route path="/app-two">
              <AppLoader appId="react-app-two"><Loading/></AppLoader>
            </Route>
          </Switch>
        </div>
      </div>
    );
  }
}

export default withRouter(App);
