import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import Mixspa from '@mixspa/core';
import Menu from './Menu';
import Content from './Content';
import classNames from 'classnames/bind';
import styles from './App.scss';
import entryList from '../data/entryList.json';

let cx = classNames.bind(styles);

class App extends React.Component {
  static propTypes = {
    baseUrl: PropTypes.string,
    history: PropTypes.object,
    location: PropTypes.object
  };

  componentDidMount() {
    this.listener = Mixspa.onLink(url => {
      if (url.startsWith(this.props.baseUrl)) {
        console.log('main linked to: ' + url);
        this.props.history.push(url.substring(this.props.baseUrl.length));
      }
    });
  }

  componentWillUnmount() {
    Mixspa.offLink(this.listener);
  }

  getActiveEntry() {
    let subUrl = this.props.location.pathname;
    return entryList.find((entry) => subUrl.startsWith(entry.url));
  }

  render() {
    let activeId = (this.getActiveEntry() || {}).id;
    return (
      <div className={ cx('app') }>
        <div className={ cx('header') }>
          <Menu entries={ entryList } baseUrl={ this.props.baseUrl } activeId={ activeId }/>
        </div>
        <div className={ cx('main') }>
          <Content entries={ entryList } baseUrl={ this.props.baseUrl }/>
        </div>
      </div>
    );
  }
}

export default withRouter(App);
