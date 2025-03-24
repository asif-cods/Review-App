import React from 'react'

const Button = ({children, version, type, isDisabled}) => {
  return (
    <button className={`btn btn-${version}`} disabled={isDisabled} type={type}>
        {children}
    </button>
  )
}

export default Button