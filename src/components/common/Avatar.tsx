'use client';

import { cn } from '@/lib/utils';

interface AvatarProps {
  src?: string;
  alt: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function Avatar({ src, alt, size = 'md', className }: AvatarProps) {
  const sizeClass = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
  }[size];

  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        className={cn('rounded-full object-cover', sizeClass, className)}
      />
    );
  }

  return (
    <div
      className={cn(
        'rounded-full bg-electric text-black flex items-center justify-center font-bold',
        sizeClass,
        className
      )}
    >
      {alt.charAt(0).toUpperCase()}
    </div>
  );
}
