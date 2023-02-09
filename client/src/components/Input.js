import React from 'react'

const Input = (props) => {
  const { className, type, placeholder, onChange, label, name } = props
  return (
    <div className={`input ${className}`}>
      <label>{label}</label>
      <input type={type} placeholder={placeholder} name={name} onChange={onChange} />
    </div>
  )
}

export default Input