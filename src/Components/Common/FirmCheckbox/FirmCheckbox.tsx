import React from 'react';

import './FirmCheckbox.css';

interface FirmCheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const FirmCheckbox: React.FC<FirmCheckboxProps> = (props) => {
  const { label, ...restProps } = props;

  return (
    <div className="checkbox-wrapper">
      <label htmlFor={restProps.id}>
        <input type="checkbox" id={restProps.id} {...restProps} />
        <span className="checkbox-layout" />
        <span>{label}</span>
      </label>
    </div>
  );
};

export default FirmCheckbox;
