import React, { ChangeEvent } from 'react';
import FormField from './FormField/FormField';

interface SelectFieldData {
  title: string;
  value: string | number;
}

interface SelectFieldProps {
  data?: SelectFieldData[];
  className?: string;
  id?: string;
  label: string;
  type?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => {}
  placeholder?: string;
}

const SelectField: React.FC<SelectFieldProps> = (props) => {
  const {
    className = '', id = '', label, type = 'text', value = '', onChange = () => {}, placeholder = '', data,
  } = props;
  const inputId = id || (Math.random() + 1).toString(36).substring(7);
  return (
    <FormField className={`${className} form-field--select`} id={inputId} label={label}>
      <select id={inputId} className="form-field-select"  onChange={onChange} value={value} placeholder={placeholder}>
        {data?.map(({ title, value }) => (
          <option value={value}>{title}</option>
        ))}
      </select>
    </FormField>
  );
};

export default SelectField;