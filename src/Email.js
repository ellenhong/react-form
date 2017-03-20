import React, { Component } from 'react';
import classnames from 'classnames';

const Email = (props) => {
  return (
    <div>
      <div className="form__header">
        Email
      </div>
      <input
        className={classnames(
          'input',
          {
            'input--empty': props.email_empty,
            'input--valid': props.email_valid,
            'input--invalid': !props.email_valid,
          }
        )}
        name="email"
        onChange={props._handleChange} 
      />
      <div 
        className={classnames(
          'error',
          {
            'error-visible': !props.email_valid && !props.email_empty,
          }
        )}
      > Email must be of the form <b>email@site.com</b>
      </div>
    </div>
  )
}

export default Email;