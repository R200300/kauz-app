'use client';

import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>((
  { label, error, className, ...props },
  ref
) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-text-primary mb-2">
          {label}
        </label>
      )}
      <input
        ref={ref}
        className={cn(
          'w-full px-4 py-2.5 bg-gray-light border border-gray-light rounded-lg',
          'text-text-primary placeholder-text-secondary',
          'focus:outline-none focus:border-electric focus:ring-1 focus:ring-electric',
          'transition-colors duration-300',
          error && 'border-red-500 focus:ring-red-500',
          className
        )}
        {...props}
      />
      {error && (
        <p className="text-red-500 text-sm mt-1">{error}</p>
      )}
    </div>
  );
});

Input.displayName = 'Input';
