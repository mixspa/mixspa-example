import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import { EventLink } from '@mixspa/react';
import classNames from 'classnames/bind';
import styles from './Menu.scss';

let cx = classNames.bind(styles);

class Menu extends React.Component {
  static propTypes = {
    entries: PropTypes.array
  };

  constructor(props) {
    super(props)

    this.state = {
      activeId: null
    };
  }

  onClick = (activeId) => this.setState({ activeId: activeId });

  render() {
    const { activeId } = this.state;
    return (
      <ul className={ cx('menu') }>
        <li className={ cx('item', { activated: !activeId }) }>
          <Link className={ cx('link') } to="/" onClick={ () => this.onClick(null) }>Index</Link>
        </li>
        {
          this.props.entries.map(entry => (
            <li key={ entry.id } className={ cx('item', { activated: activeId === entry.id }) }>
              <EventLink className={ cx('link') } to={ entry.url } onClick={ () => this.onClick(entry.id) }>
                { entry.name }
              </EventLink>
            </li>
          ))
        }
      </ul>
    );
  }
}

export default Menu;
