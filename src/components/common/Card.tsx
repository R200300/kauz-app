'use client';

import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  interactive?: boolean;
}

export function Card({ children, className, onClick, interactive = false }: CardProps) {
  return (
    <div
      className={cn(
        'bg-dark-gray border border-gray-light rounded-lg p-4',
        'transition-all duration-300',
        interactive && 'hover:border-electric cursor-pointer hover:bg-gray-light',
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
