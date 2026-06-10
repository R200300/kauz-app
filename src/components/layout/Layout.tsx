'use client';

import { ReactNode } from 'react';
import { Navbar } from './Navbar';

interface LayoutProps {
  children: ReactNode;
  user?: {
    displayName: string;
    photoURL?: string;
  };
  onLogout?: () => void;
}

export function Layout({ children, user, onLogout }: LayoutProps) {
  return (
    <div className="min-h-screen bg-black">
      <Navbar user={user} onLogout={onLogout} />
      <main className="max-w-7xl mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  );
}
