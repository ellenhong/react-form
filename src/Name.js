import React, { Component } from 'react';
import classnames from 'classnames';

export default class Name extends Component {
  constructor(props) {
    super(props);

    this.state = {
    	firstEmpty: true,
    	lastEmpty: true,
      firstValid: false,
      lastValid: false,
    };

    this._handleChangeFirst = this._handleChangeFirst.bind(this);
		this._handleChangeLast = this._handleChangeLast.bind(this);
  }
  _handleChangeFirst(event){
    this.validateFirst(event.target.value);
 
    if(this.props.onChange) {
      this.props.onChange(event);
    }
  }
  validateFirst(value) {
  	var re = /^[A-Z][a-z]{1,19}$/;
    this.setState({
    	firstEmpty: (value.length === 0),
      firstValid: re.test(value),
    })
  }

  _handleChangeLast(event){
    this.validateLast(event.target.value);
 
    if(this.props.onChange) {
      this.props.onChange(event);
    }
  }
  validateLast(value) {
  	var isValid = true;
  	for (var i = 0; i < value.length - 1; i++) {
  		isValid = isValid && (value[i] === value[i].toLowerCase());
  	}
  	isValid = isValid && (value[value.length-1] === value[value.length-1].toUpperCase());
  	this.setState({
  		lastEmpty: (value.length === 0),
  		lastValid: isValid,
  	})
  }

  render() {
    return (
      <div>
      	First name:
        <input
          className={classnames(
            'input',
            {
            	'input--empty': this.state.firstEmpty,
              'input--valid': this.state.firstValid,
              'input--invalid': !this.state.firstValid
            }
          )}
          type="text"
          onChange={this._handleChangeFirst} 
        /><br/>
        Last name:
        <input
          className={classnames(
            'input',
            {
            	'input--empty': this.state.lastEmpty,
              'input--valid': this.state.lastValid,
              'input--invalid': !this.state.lastValid
            }
          )}
          type="text"
          onChange={this._handleChangeLast} 
        />
      </div>
    );
  }
}