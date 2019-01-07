import React from 'react';
import { Link } from 'react-router-dom';

const handleClick = (event) => {
  window.dispatchEvent(new CustomEvent('url:changed', {
    detail: {
      url: event.target.getAttribute('href')
    }
  }));
};

const HomePage = () => (
  <div>
    <ul>
      <li>
        <Link to="/" onClick={e => handleClick(e)} >Home</Link>
      </li>
      <li>
        <Link to="/app-one" onClick={e => handleClick(e)}>App One</Link>
      </li>
      <li>
        <Link to="/app-two" onClick={e => handleClick(e)}>App Two</Link>
      </li>
    </ul>
  </div>
);

export default HomePage;
