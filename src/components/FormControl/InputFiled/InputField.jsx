import React from 'react';

import './input-field.scss';

function InputField({ type, value, placeholder, onChange, className }) {
  return (
    <input
      className={`input__field ${className ? className : ''}`}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange ? (e) => onChange(e) : null}
    />
  );
}

export default InputField;
