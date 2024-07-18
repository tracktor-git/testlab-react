import React from 'react';
import CheckboxProps from '../../../Types/CheckboxProps';

const Checkbox: React.FC<CheckboxProps> = (props) => {
  const {
    id,
    name,
    isChecked,
    onChange,
    label,
  } = props;

  return (
    <div className="checkbox-wrapper">
      <input
        type="checkbox"
        id={id}
        name={name}
        checked={isChecked}
        onChange={onChange}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default Checkbox;
