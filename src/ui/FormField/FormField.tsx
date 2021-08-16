import React from 'react';
import './FormField.scss';

interface FormFieldProps {
  className?: string;
  id?: string;
  label: string;
  children: React.ReactChildren | React.ReactElement | JSX.Element;
}

const FormField: React.FC<FormFieldProps> = (props) => {
  const {
    className, id, label, children,
  } = props
  return (
  <div className={`form-field ${className}`}>
    <label className="form-field-label" htmlFor={id}>{`${label} :`}</label>
    {children}
  </div>
  )
}

export default FormField;
