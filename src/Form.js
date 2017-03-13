import React, { Component } from 'react';
import './Form.css';

import Name from './Name';
import Email from './Email';
import Phone from './Phone';

export default class Form extends Component {
  render() {
    return (
      <div className="form">
        <Name />
        <Email />
        <Phone />
      </div>
    );
  }
}