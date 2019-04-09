import React from 'react';
import { EventLink } from '@mixspa/react';
import { Link } from 'react-router-dom'
import style from './HomePage.scss';

const HomePage = () => (
  <div className={ style.navBar }>
    <ul>
      <li>
        <Link to="abc">Test</Link>
      </li>
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
