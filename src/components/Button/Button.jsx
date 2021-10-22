import PropTypes from 'prop-types';
import React from 'react';
import './button.scss';

Button.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
};

function Button({ onClick, className, children }) {
  const handleClick = () => {
    if (!onClick) return;

    onClick();
  };

  return (
    <button
      className={`btn ${className ? className : null}`}
      onClick={handleClick}
    >
      <span>{children}</span>
    </button>
  );
}

export default Button;
