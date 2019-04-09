import { h } from 'preact';
import Header from './Header';
import Content from './Content';
import styles from './HomePage.scss';
import entryList from '../data/entryList.json';

const HomePage = () => (
  <div className={ styles.home }>
    <Header entries={ entryList } onLinkClick={ () => {} }/>
    <Content />
  </div>
);

export default HomePage;
