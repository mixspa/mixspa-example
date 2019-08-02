import React from 'react';
import PropTypes from 'prop-types';
import { AppLink } from '@mixspa/react';
import style from './App.scss';

const App = ({ baseUrl }) => (
  <div className={ style.navBar }>
    <ul>
      <li>
        <AppLink base={ baseUrl } to="/">Home</AppLink>
      </li>
      <li>
        <AppLink base={ baseUrl } to="/app-one">App One</AppLink>
      </li>
      <li>
        <AppLink base={ baseUrl } to="/app-two">App Two</AppLink>
      </li>
    </ul>
  </div>
);

App.propTypes = {
  baseUrl: PropTypes.string.isRequired
};

export default App;
