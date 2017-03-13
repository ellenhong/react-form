import React, { Component } from 'react';
import classnames from 'classnames';

export default class Phone extends Component {
  constructor(props) {
    super(props);

    this.state = {
    	empty: true,
      valid: false,
    };

    this._handleChange = this._handleChange.bind(this);
  }
  _handleChange(event){
    this.validatePhone(event.target.value);
 
    if(this.props.onChange) {
      this.props.onChange(event);
    }
  }
  validatePhone(value) {
    var re = /^[(]\d{3}[)][-]\d{3}[-]\d{4}$/;
    this.setState({
    	empty: (value.length === 0),
      valid: re.test(value),
    })
  }
  render() {
    return (
      <div>
     		Phone number:
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