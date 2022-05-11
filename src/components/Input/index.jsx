//@ts-check

import React from 'react'

/**
 *
 * @param {Object} props
 * @returns {React.ReactElement}
 */
function Input(props) {
  return (
    <div className={props.label?.replaceAll(' ', '').toLowerCase()}>
      {props.label && (
        <label htmlFor={props.id}>
          <span>{props.label}</span>
          {props.required && (
            <span style={{ color: 'red', fontSize: 'small' }}>*</span>
          )}
          <input {...props} />
        </label>
      )}
    </div>
  )
}

export default Input
