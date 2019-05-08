import { h } from 'preact';
import classNames from 'classnames/bind';
import styles from './Header.scss';

let cx = classNames.bind(styles);

const Header = ({ entries, activeId, onLinkClick }) => (
  <div className={ cx('header') }>
    <ul className={ cx('menu') }>
      {
        entries.map(entry => (
          <li className={ cx('item', { activated: activeId === entry.id }) }>
            <a className={ cx('link') } href="javascript:void" onclick={ () => onLinkClick(entry.id) }>
              { entry.name }
            </a>
          </li>
        ))
      }
    </ul>
  </div>
);

export default Header;
