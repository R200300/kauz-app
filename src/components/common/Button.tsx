'use client';

import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  isLoading?: boolean;
}

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  isLoading,
  className,
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles = 'font-semibold rounded-lg transition-colors duration-300 flex items-center justify-center';

  const variants = {
    primary: 'bg-electric hover:bg-electric-dark text-black disabled:bg-gray-light disabled:text-text-secondary',
    secondary: 'bg-gray-light hover:bg-dark-gray text-text-primary border border-gray-light disabled:opacity-50',
    ghost: 'text-electric hover:bg-gray-light disabled:text-text-secondary',
  };

  const sizes = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-2.5 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <>
          <div className="animate-spin mr-2 w-4 h-4 border-2 border-current border-t-transparent rounded-full" />
          Loading...
        </>
      ) : (
        children
      )}
    </button>
  );
}
