import React from 'react'

const Button = (props) => {
  const { text, onClick, className } = props
  return (
    <button className={`btn ${className}`} onClick={onClick}>
      {text}
    </button>
  )
}

export default Button