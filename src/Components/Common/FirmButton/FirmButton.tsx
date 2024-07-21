import React from 'react';
import classNames from 'classnames';

import './FirmButton.css';

interface FirmButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'default';
  isSubmitting?: boolean;
}

const FirmButton: React.FC<FirmButtonProps> = (props) => {
  const {
    variant = 'default',
    className,
    isSubmitting,
    ...restProps
  } = props;

  const buttonClassName = classNames(
    'button',
    {
      submitting: isSubmitting,
      'button-primary': variant === 'primary',
      'button-default': variant === 'default',
    },
    className,
  );

  return <button type="button" className={buttonClassName} {...restProps} />;
};

export default FirmButton;
