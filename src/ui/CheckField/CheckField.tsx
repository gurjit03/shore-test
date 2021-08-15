import React from 'react';
import { CheckIcon } from '../../icons';

interface CheckFieldProps {
  label: string;
  value?: boolean;
  onChange?: (value: boolean) => {},
}

const CheckField: React.FC<CheckFieldProps> = (props) => {
  const { label, value, onChange = () => {} } = props;
  return (
    <div className="check-field" onClick={() => onChange(!value)}>
      <div className="check-field-box">
        {value ? <CheckIcon /> : ''}
      </div>
      <label className="check-field-label">{label}</label>
    </div>
  )
}

export default CheckField;
