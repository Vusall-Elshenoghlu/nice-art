import React from 'react';

export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'close' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    loading?: boolean;
}