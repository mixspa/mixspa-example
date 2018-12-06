import React from 'react';
import { withRouter } from "react-router";

class RouteEvent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.addEventListener('url:changed', (e) => {
      console.log(e.detail);
      console.log(this.props.location);
      this.props.history.push(e.detail.url);
    });
  }

  render() {
    return '';
  }
}
export default withRouter(RouteEvent);
