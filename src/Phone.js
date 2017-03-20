import React, { Component } from 'react';
import classnames from 'classnames';

const Phone = (props) => {
  return (
    <div>
      <div className="form__header">
        Phone
      </div>
      <input
        className={classnames(
          'input',
          {
            'input--empty': props.phone_empty,
            'input--valid': props.phone_valid,
            'input--invalid': !props.phone_valid,
          }
        )}
        name="phone"
        onChange={props._handleChange} 
      />
      <div 
        className={classnames(
          'error',
          {
            'error-visible': !props.phone_valid && !props.phone_empty,
          }
        )}
      > Phone must be of the form <b>(123)-456-7890</b>
      </div>
    </div>
  )
}

export default Phone;