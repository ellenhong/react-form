import React, { Component } from 'react';
import request from 'superagent';
import './Form.css';

import Name from './Name';
import Email from './Email';
import Phone from './Phone';

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      first: '',
      last: '',
      email: '',
      phone: '',
      first_empty: true,
      first_valid: false,
      last_empty: true,
      last_valid: false,
      email_empty: true,
      email_valid: false,
      phone_empty: true,
      phone_valid: false,
    };

    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleChange(e) {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
    if (e.target.name === 'first') {
      this.validateFirst(e.target.value);
    } else if (e.target.name === 'last') {
      this.validateLast(e.target.value);
    } else if (e.target.name === 'email') {
      this.validateEmail(e.target.value);
    } else if (e.target.name === 'phone') {
      this.validatePhone(e.target.value);
    }
  }

  _handleSubmit(e) {
    e.preventDefault();
    if (!this.state.first_empty && this.state.first_valid && !this.state.last_empty && this.state.last_valid &&
        !this.state.email_empty && this.state.email_valid && !this.state.phone_empty && this.state.phone_valid) {
      request
        .post('http://webtier.christianle.com/v1/contact')
        .send({
          first: this.state.first,
          last: this.state.last,
          email: this.state.email,
          phone: this.state.phone, 
        })
        .end(function(err, res){
          if (err || !res.ok) {
            alert('Error');
          } else {
            alert('You sent ' + JSON.stringify(res.body));
          }
        });
    }
  }

  validateFirst(value) {
    var re = /^[A-Z][a-z]{1,19}$/;
    this.setState({
      first_empty: (value.length === 0),
      first_valid: re.test(value),
    })
  }

  validateLast(value) {
    if (value.length === 0) {
      this.setState({
        last_empty: true,
      })
    } else {
      var isValid = true;
      for (var i = 0; i < value.length - 1; i++) {
        isValid = isValid && (value[i] === value[i].toLowerCase());
      }
      isValid = isValid && (value[value.length-1] === value[value.length-1].toUpperCase());
      this.setState({
        last_empty: false,
        last_valid: isValid,
      })
    }
  }

  validateEmail(value) {
    var re = /\S+@\S+\.\S+/;
    this.setState({
      email_empty: (value.length === 0),
      email_valid: re.test(value),
    })
  }

  validatePhone(value) {
    var re = /^[(]\d{3}[)][-]\d{3}[-]\d{4}$/;
    this.setState({
      phone_empty: (value.length === 0),
      phone_valid: re.test(value),
    })
  }

  render() {
    return (
      <div className="form">
        <Name 
          _handleChange={this._handleChange} 
          first_empty={this.state.first_empty}
          first_valid={this.state.first_valid}
          last_empty={this.state.last_empty}
          last_valid={this.state.last_valid}
        />
        <Email
          _handleChange={this._handleChange}
          email_empty={this.state.email_empty}
          email_valid={this.state.email_valid}
        />
        <Phone
          _handleChange={this._handleChange}
          phone_empty={this.state.phone_empty}
          phone_valid={this.state.phone_valid}
        />
        <button onClick={this._handleSubmit}>Submit</button>
      </div>
    );
  }
}