'use client';

import React from 'react';
import Link from 'next/link';
import { LoginForm } from '@/components/auth/LoginForm';

export default function LoginPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Welcome Back</h2>
        <p className="text-gray-600 mt-2">Sign in to your Kauz account</p>
      </div>

      <LoginForm />

      <div className="text-center">
        <p className="text-gray-600">
          Don't have an account?{' '}
          <Link href="/signup" className="text-blue-600 font-semibold hover:text-blue-700">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}