import { h, Component } from 'preact';
import classNames from 'classnames/bind';
import Header from './Header';
import Content from './Content';
import styles from './HomePage.scss';
import entryList from '../data/entryList.json';

let cx = classNames.bind(styles);

class HomePage extends Component {
  constructor() {
    super();
    this.state.active = entryList[0];
  }

  onNavigate = (id) => {
    let activeEntry = entryList.find(e => e.id === id);
    this.setState({ active: activeEntry });
  }

  render(props, state) {
    return (
      <div className={ cx('home') }>
        <Header entries={ entryList } activeId={ state.active.id } onLinkClick={ this.onNavigate }/>
        <Content entry={ state.active }/>
      </div>
    );
  }
}

export default HomePage;
