import React, { ChangeEvent } from 'react';
import FormField  from './FormField';

interface InputFieldProps {
  label: string;
  id?: string;
  className?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => {};
  placeholder?: string;
  type?: string;
}

export const InputField: React.FC<InputFieldProps> = (props) => {
  const {
    className, id, label, type, value, onChange, placeholder,
  } = props;
  const inputId = id || (Math.random() + 1).toString(36).substring(7);
  return (
    <FormField className={className} id={inputId} label={label}>
      <input id={inputId} className="form-field-input" type={type} onChange={onChange} value={value} placeholder={placeholder} />
    </FormField>
  );
};

export default InputField;
