// Button.tsx
import React from 'react';
import { IButtonProps } from './button';
import { useButtonStyles } from './button.style';
import useLocalization from '../../../assets/lang';

const Button: React.FC<IButtonProps> = ({children, variant = 'primary', size = 'md', loading = false, disabled, className = '', ...props}) => {
    const classes = useButtonStyles();
    const translate = useLocalization();
    return (
        <button
            className={`
        ${classes.base} 
        ${classes[variant]} 
        ${classes[size]} 
        ${disabled || loading ? classes.disabled : ''} 
        ${className}
      `}
            disabled={disabled || loading}
            {...props}
        >
            {loading ? translate('products_loading') : children}
        </button>
    );
};

export default Button;
