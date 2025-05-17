import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  loading?: boolean;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  disabled = false,
  type = 'button',
  icon,
  iconPosition = 'left',
  loading = false,
  fullWidth = false,
}) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-all focus:outline-none';
  
  const variantStyles = {
    primary: 'bg-gradient-to-r from-primary to-secondary text-white hover:shadow-lg hover:-translate-y-1',
    secondary: 'bg-gradient-to-r from-accent to-secondary text-white hover:shadow-lg hover:-translate-y-1',
    outline: 'border-2 border-accent text-accent hover:bg-accent hover:text-dark',
    text: 'text-accent hover:text-white',
  };
  
  const sizeStyles = {
    sm: 'text-xs py-2 px-3',
    md: 'text-sm py-2.5 px-5',
    lg: 'text-base py-3 px-6',
  };
  
  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';
  const widthStyles = fullWidth ? 'w-full' : '';
  
  const buttonClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabledStyles} ${widthStyles} ${className}`;
  
  const content = (
    <>
      {loading ? (
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      ) : icon && iconPosition === 'left' ? (
        <span className="mr-2">{icon}</span>
      ) : null}
      {children}
      {icon && iconPosition === 'right' && !loading ? <span className="ml-2">{icon}</span> : null}
    </>
  );
  
  if (href) {
    return (
      <Link href={href} className={buttonClasses} aria-disabled={disabled}>
        {content}
      </Link>
    );
  }
  
  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {content}
    </button>
  );
};