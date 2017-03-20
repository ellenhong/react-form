import React from 'react';
import classnames from 'classnames';

const Name = (props) => {
	return (
		<div>
			<div className="form__header">
				First name
			</div>
			<input
				className={classnames(
          'input',
          {
          	'input--empty': props.first_empty,
          	'input--valid': props.first_valid,
          	'input--invalid': !props.first_valid,
          }
        )}
				name="first"
        onChange={props._handleChange} 
      />
      <div 
        className={classnames(
          'error',
          {
            'error--visible': !props.first_valid && !props.first_empty,
          }
        )}
      > (only) first letter must be capitalized
      </div>
      <div className="form__header">
				Last name
			</div>
      <input
      	className={classnames(
          'input',
          {
          	'input--empty': props.last_empty,
          	'input--valid': props.last_valid,
          	'input--invalid': !props.last_valid,
          }
        )}
      	name="last"
        onChange={props._handleChange} 
      /><br/>
      <div 
        className={classnames(
          'error',
          {
            'error--visible': !props.last_valid && !props.last_empty,
          }
        )}
      > (only) last letter must be capitalized
      </div>
    </div>
	)
}

export default Name;