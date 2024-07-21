import React from 'react';
import { IMaskMixin } from 'react-imask';

const MaskedInput = IMaskMixin(({ inputRef, ...props }) => (
  <input {...props} ref={inputRef as React.RefObject<HTMLInputElement>} />
));

type InputProps = {
  id: string,
  name: string,
  label: string,
  mask?: string,
  className?: string | null,
  errorText: string | null,
  isSubmitting: boolean,
  isCompleted?: boolean,
  inputMode?: string | null,
  handleChange: (e: React.ChangeEvent<any>) => void,
  handleBlur: (e: React.FocusEvent<any, Element>) => void,
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

  return (
    <div className="floating-input">
      <MaskedInput
        type="text"
        inputMode={inputMode}
        id={id}
        name={name}
        autoComplete="off"
        mask={mask}
        className={!isCompleted ? className : `${className} completed`}
        placeholder=" "
        onChange={handleChange}
        onBlur={handleBlur}
        disabled={isSubmitting}
      />
      {/* eslint-disable-next-line */}
      <label htmlFor={name}>{label}</label> 
      {errorText && <span className="error-text">{errorText}</span>}
      {isCompleted && <div className="input-state success" />}
      {errorText && <div className="input-state error" />}
    </div>
  );
};

export default FloatingInput;
