import React from 'react';
import ButtonProps from '../../../Types/ButtonProps';

const Button: React.FC<ButtonProps> = (props) => {
  const {
    className,
    severity,
    type,
    label,
    onClick,
    isDisabled,
  } = props;

  const defaultClassName = className ? `button ${className}` : 'button';
  const buttonClassName = severity ? `${defaultClassName} button-${severity}` : `${defaultClassName} button-default`;

  return (
    <button
      type={type === 'submit' ? 'submit' : 'button'}
      className={buttonClassName}
      disabled={isDisabled}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
