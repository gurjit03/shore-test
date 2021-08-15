import React from 'react';
import { LoadingIcon } from '../icons';

type ButtonVariant = 'primary' | 'secondary';
type ButtonTypes = "button" | "submit" | "reset" | undefined

interface ButtonProps {
  className?: string;
  loading: boolean;
  children: React.ReactChildren | React.ReactElement | JSX.Element;
  type: ButtonTypes;
  variant?: ButtonVariant;
  onClick?: () => {}
}


const Button: React.FC<ButtonProps> = (props) => {
  const {
    className, loading, children, type
  } = props;
  return (
    <button type={type} className={`primary-button ${type ? `primary-button--${type}` : ''} ${className || ''}`}>
      {loading ? (<LoadingIcon className="primary-button-icon" />) : (children)}
    </button>
  )
}

export default Button;


