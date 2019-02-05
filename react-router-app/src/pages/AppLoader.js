import React from 'react';
import PropTypes from 'prop-types';
import MixspaLoader from '@mixspa/loader';

class AppLoader extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    url: PropTypes.string
  };

  constructor(props) {
    super(props);
    this.state = { isLoading: true };
  }

  componentDidMount() {
    MixspaLoader.loadApp(this.props.name, this.props.url).then(appInfo => {
      this.setState({
        isLoading: false,
        appInfo: appInfo
      });
    });
  }

  render() {
    const { name, url, ...rest } = this.props;
    const { isLoading, appInfo } = this.state;
    return (
      <div>
        {
          isLoading ? (
            <span>Loading ...</span>
          ) : (
            <appInfo.tag {...rest} />
          )
        }
      </div>
    );
  }
}

export default AppLoader;
