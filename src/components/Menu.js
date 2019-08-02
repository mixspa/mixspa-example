import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import { AppLink } from '@mixspa/react';
import classNames from 'classnames/bind';
import styles from './Menu.scss';

let cx = classNames.bind(styles);

const Menu = ({ baseUrl, entries, activeId }) => (
  <ul className={ cx('menu') }>
    <li className={ cx('item', { activated: !activeId }) }>
      <Link className={ cx('link') } to="/" onClick={ () => this.onClick(null) }>Index</Link>
    </li>
    {
      entries.map(entry => (
        <li key={ entry.id } className={ cx('item', { activated: activeId === entry.id }) }>
          <AppLink className={ cx('link') } base={ baseUrl } to={ entry.url }>
            { entry.name }
          </AppLink>
        </li>
      ))
    }
  </ul>
);

Menu.propTypes = {
  entries: PropTypes.array.isRequired,
  baseUrl: PropTypes.string.isRequired,
  activeId: PropTypes.string
};

export default Menu;
