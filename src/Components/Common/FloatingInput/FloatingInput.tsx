import React from 'react';
import classNames from 'classnames';
import { IMaskMixin } from 'react-imask';

import './FloatingInput.css';

const MaskedInput = IMaskMixin(({ inputRef, ...props }) => (
  <input {...props} ref={inputRef as React.RefObject<HTMLInputElement>} />
));

type InputProps = {
  id: string,
  name: string,
  label: string,
  mask?: string,
  className?: string | null,
  errorText?: string | undefined,
  isSubmitting?: boolean,
  isCompleted?: boolean,
  inputMode?: string | null,
  handleChange?: (e: React.ChangeEvent<any>) => void,
  handleBlur?: (e: React.FocusEvent<any, Element>) => void,
};

const FloatingInput: React.FC<InputProps> = (props) => {
  const {
    id,
    name,
    label,
    mask,
    className,
    errorText,
    isSubmitting,
    isCompleted,
    inputMode,
    handleChange,
    handleBlur,
  } = props;

  const isError = !!errorText;

  const inputClassName = classNames(
    className,
    { completed: isCompleted },
  );

  const inputStateClassName = classNames('input-state', {
    success: isCompleted,
    error: isError,
  });

  return (
    <div className="floating-input">
      <label htmlFor={id}>
        <MaskedInput
          type="text"
          autoComplete="off"
          placeholder=" "
          id={id}
          name={name}
          mask={mask}
          inputMode={inputMode}
          className={inputClassName}
          disabled={isSubmitting}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <span>{label}</span>
      </label>
      {isError && <span className="error-text">{errorText}</span>}
      {(isCompleted || isError) && <div className={inputStateClassName} />}
    </div>
  );
};

export default FloatingInput;
