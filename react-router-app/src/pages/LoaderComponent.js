import React from 'react';
import PropTypes from 'prop-types';
import Loader from './Loader';

class LoaderComponent extends React.Component {
  static propTypes = {
    url: PropTypes.string,
    elType: PropTypes.string
  };

  constructor(pros) {
    super(pros);
    this.state = { isLoading: true };
  }

  componentDidMount() {
    Loader.loader(this.props.url)
      .then(() => {
        this.setState({ isLoading: false });
      }).catch(() => {

      });
  }

  render() {
    const {url, elType, ...rest} = this.props;
    return (
      <div>
        {
          this.state.isLoading ? (
            <span>Loading ...</span>
          ) : (
            <this.props.elType {...rest}>Success</this.props.elType>
          )
        }
      </div>
    );
  }
}

export default LoaderComponent;
