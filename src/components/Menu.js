import React from 'react';
import { Link } from 'react-router-dom'
import { EventLink } from '@mixspa/react';
import classNames from 'classnames/bind';
import styles from './Menu.scss';

let cx = classNames.bind(styles);

const Menu = ({ entries, activeId }) => (
  <ul className={ cx('menu') }>
    <li className={ cx('item', { activated: !activeId }) }>
      <Link className={ cx('link') } to="/">Index</Link>
    </li>
    {
      entries.map(entry => (
        <li className={ cx('item', { activated: activeId === entry.id }) }>
          <EventLink className={ cx('link') } to={ entry.url }>
            { entry.name }
          </EventLink>
        </li>
      ))
    }
  </ul>
);

export default Menu;
