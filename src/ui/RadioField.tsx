import React, { ChangeEvent } from 'react';
import FormField from './FormField/FormField';

interface RadioFieldData {
  title: string;
  value: string;
}

interface RadioFieldProps {
  className?: string;
  label: string;
  value?: string;
  onChange?: (value: string) => void;
  data: RadioFieldData[]
}

const RadioField: React.FC<RadioFieldProps> = (props) => {
  const {
    className, label, value = '', onChange = () => {}, data,
  } = props;
  return (
    <FormField className={className} label={label}>
      <div className="form-field-radios">
        {data?.map(({ title, value }) => (
          <div className="form-field-radios-node" onChange={() => onChange(value)}>
            <div className={`form-field-radios-node-ring ${value === 'selected' ? 'active' : ''}`} />
            <div className="form-field-radios-node-label">{title}</div>
          </div>
        ))}
      </div>
    </FormField>
  )
}

export default RadioField;

