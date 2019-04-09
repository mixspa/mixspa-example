import { h } from 'preact';
import styles from './Header.scss';

const Header = ({ entries, onLinkClick }) => (
  <div className={ styles.header }>
    <ul className={ styles.menu }>
      {
        entries.map(entry => (
          <li className={ styles.item }>
            <a className={ styles.link } href="javascript:void" onclick={onLinkClick.bind(entry.id)}>{ entry.name }</a>
          </li>
        ))
      }
    </ul>
  </div>
);

export default Header;
