import React, { ButtonHTMLAttributes } from "react";
import './Button.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClickMethod : (args: any) => void;
}


const Button: React.FC<ButtonProps> = ({ disabled = false, children, onClickMethod, ...rest }) => {
  return (
    <button disabled={disabled} className='primary-btn' {...rest} onClick={onClickMethod}>
      {children}
    </button>
  );
};

export default Button;