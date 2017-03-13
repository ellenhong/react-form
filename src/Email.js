import React, { Component } from 'react';
import classnames from 'classnames';

export default class Email extends Component {
  constructor(props) {
    super(props);

    this.state = {
      empty: true,
      valid: false,
    };

    this._handleChange = this._handleChange.bind(this);
  }
  _handleChange(event){
    this.validateEmail(event.target.value);
 
    if(this.props.onChange) {
      this.props.onChange(event);
    }
  }
  validateEmail(value) {
    var re = /\S+@\S+\.\S+/;
    this.setState({
      empty: (value.length === 0),
      valid: re.test(value),
    })
  }
  render() {
    return (
      <div>
        Email:
        <input
          className={classnames(
            'input',
            {
              'input--empty': this.state.empty,
              'input--valid': this.state.valid,
              'input--invalid': !this.state.valid
            }
          )}
          type="text"
          onChange={this._handleChange} 
        />
      </div>
    );
  }
}