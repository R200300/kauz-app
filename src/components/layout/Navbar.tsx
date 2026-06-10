'use client';

import Link from 'next/link';
import { Avatar } from '@/components/common/Avatar';
import { ROUTES } from '@/lib/constants';

interface NavbarProps {
  user?: {
    displayName: string;
    photoURL?: string;
  };
  onLogout?: () => void;
}

export function Navbar({ user, onLogout }: NavbarProps) {
  return (
    <nav className="bg-dark-gray border-b border-gray-light sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href={ROUTES.HOME} className="flex items-center gap-2">
          <div className="w-10 h-10 bg-electric rounded-lg flex items-center justify-center">
            <span className="text-black font-bold text-lg">K</span>
          </div>
          <span className="text-electric font-bold text-xl">Kauz</span>
        </Link>

        <div className="flex items-center gap-4">
          {user ? (
            <>
              <span className="text-text-secondary text-sm">{user.displayName}</span>
              <Avatar alt={user.displayName} src={user.photoURL} />
              <button
                onClick={onLogout}
                className="text-text-secondary hover:text-electric transition-colors"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href={ROUTES.LOGIN} className="text-text-secondary hover:text-electric transition-colors">
                Login
              </Link>
              <Link href={ROUTES.SIGNUP} className="text-electric hover:text-electric-dark transition-colors">
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
