import React, { Component } from 'react';
import classnames from 'classnames';
import logo from './logo.svg';
require('./Navigation.css');

export default class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };

    this._onNavigationClick = this._onNavigationClick.bind(this);
  }

  _onNavigationClick(e) {
    e.preventDefault();
    this.setState({
      open: !this.state.open,
    });
  }

  render() {
    return (
      <div 
        className={classnames(
          'navigation',
          {
            'navigation--open': this.state.open
          }
        )}
        onClick={this._onNavigationClick}
      >
        <img alt="alt" className="navigation__logo" src={logo} />
      </div>
    );
  }
}