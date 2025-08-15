import React from 'react';
import {IButtonProps} from './button';

const Button: React.FC<IButtonProps> = ({children, className = '', style, ...props}) =>{
    return (
        <button
            className={className}
            style={style}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;