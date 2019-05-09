import { h, Component } from 'preact';
import Mixspa from '@mixspa/core';
import classNames from 'classnames/bind';
import styles from './Content.scss';

let cx = classNames.bind(styles);

class Content extends Component {
  constructor() {
    super();
    this.state = {
      appInfo: {},
      loading: true
    };
  }

  componentDidMount() {
    console.log("load content: " + this.props.entry.id);
    Mixspa.load(this.props.entry.id)
      .then(appInfo => this.setState({ loading: false, appInfo: appInfo }))
      .catch(err => this.setState({ loading: false, error: err }));
  }

  render(props, state) {
    const { loading, appInfo, error } = state;
    return (
      <div className={ cx('content') }>
        {
          loading ? <div>Loading...</div> : <appInfo.tag className={ cx('app') } baseUrl={ props.entry.url }/>
        }
      </div>
    );
  }
}

export default Content;
