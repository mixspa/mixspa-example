import React from 'react';
import { EventLink } from '@mixspa/react';
import style from './HomePage.scss';

const HomePage = () => (
  <div className={ style.navBar }>
    <ul>
      <li>
        <EventLink to="/">Home</EventLink>
      </li>
      <li>
        <EventLink to="/app-one">App One</EventLink>
      </li>
      <li>
        <EventLink to="/app-two">App Two</EventLink>
      </li>
    </ul>
  </div>
);

export default HomePage;
