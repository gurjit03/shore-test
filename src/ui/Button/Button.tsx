import React from 'react';
import { LoadingIcon } from '../../icons';
import './Button.scss';

type ButtonVariant = 'success' | 'warning';
type ButtonTypes = "button" | "submit" | "reset" | undefined

interface ButtonProps {
  className?: string;
  loading?: boolean;
  children: React.ReactChildren | React.ReactElement | JSX.Element;
  type?: ButtonTypes;
  variant?: ButtonVariant;
  onClick?: () => void
}


const Button: React.FC<ButtonProps> = (props) => {
  const {
    className, loading = false, children, type = 'button', variant, onClick = () => {}
  } = props;
  return (
    <button 
      type={type} 
      className={`primary-button ${variant ? `primary-button--${variant}` : ''} ${className || ''}`}
      onClick={onClick}
    >
      {loading ? (<LoadingIcon className="primary-button-icon" />) : (children)}
    </button>
  )
}

export default Button;


