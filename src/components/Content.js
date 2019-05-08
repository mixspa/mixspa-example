import { h, Component } from 'preact';
import Mixspa from '@mixspa/core';
import styles from './Content.scss';

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

  componentDidUpdate() {
    console.log("prepare render app: " + this.state.appInfo.tag);
    let dom = document.createElement(this.state.appInfo.tag);
    dom.className = styles.app;
    dom.setAttribute("baseUrl", this.props.entry.url);
    document.getElementById('InnerApp').append(dom);
  }

  render(props, state) {
    return (
      <div className={ styles.content }>
        {
          state.loading ? <div>Loading...</div> : <div id='InnerApp'/>
        }
      </div>
    );
  }
}

export default Content;
