import { h, Component } from 'preact';
import Mixspa from '@mixspa/core';
import styles from './Content.scss';

class Content extends Component {
  render() {
    return (
      <div className={ styles.content }>Content 2</div>
    );
  }
}

export default Content;
