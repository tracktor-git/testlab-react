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
  className: string | null,
  errorText: string | null,
  handleChange: (e: React.ChangeEvent<any>) => void,
  handleBlur: (e: React.FocusEvent<any, Element>) => void,
  isSubmitting: boolean,
  isComplete?: boolean,
  inputMode?: string | null,
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
    handleChange,
    handleBlur,
    isComplete,
    inputMode,
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
        className={className}
        placeholder=" "
        onChange={handleChange}
        onBlur={handleBlur}
        disabled={isSubmitting}
      />
      {/* eslint-disable-next-line */}
      <label htmlFor={name}>{label}</label> 
      {errorText && <span className="error-text">{errorText}</span>}
      {isComplete && <div className="input-state success" />}
      {errorText && <div className="input-state error" />}
    </div>
  );
};

export default FloatingInput;
