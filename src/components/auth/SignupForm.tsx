'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/common/Button';
import { Input } from '@/components/common/Input';
import { ROUTES } from '@/lib/constants';

interface SignupFormProps {
  onSubmit: (email: string, password: string, displayName: string) => Promise<void>;
  isLoading?: boolean;
}

export function SignupForm({ onSubmit, isLoading }: SignupFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState<{
    email?: string;
    password?: string;
    displayName?: string;
    confirmPassword?: string;
  }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors: typeof errors = {};
    if (!email) newErrors.email = 'Email is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = 'Invalid email format';
    if (!displayName) newErrors.displayName = 'Name is required';
    if (!password) newErrors.password = 'Password is required';
    if (password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    if (password !== confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      await onSubmit(email, password, displayName);
    } catch (error) {
      setErrors({ email: 'Signup failed. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Input
        label="Full Name"
        type="text"
        placeholder="John Doe"
        value={displayName}
        onChange={(e) => {
          setDisplayName(e.target.value);
          if (errors.displayName) setErrors({ ...errors, displayName: undefined });
        }}
        error={errors.displayName}
      />
      <Input
        label="Email"
        type="email"
        placeholder="you@example.com"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          if (errors.email) setErrors({ ...errors, email: undefined });
        }}
        error={errors.email}
      />
      <Input
        label="Password"
        type="password"
        placeholder="••••••••"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
          if (errors.password) setErrors({ ...errors, password: undefined });
        }}
        error={errors.password}
      />
      <Input
        label="Confirm Password"
        type="password"
        placeholder="••••••••"
        value={confirmPassword}
        onChange={(e) => {
          setConfirmPassword(e.target.value);
          if (errors.confirmPassword) setErrors({ ...errors, confirmPassword: undefined });
        }}
        error={errors.confirmPassword}
      />

      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full"
        isLoading={isLoading || isSubmitting}
      >
        Create Account
      </Button>

      <div className="text-center">
        <p className="text-text-secondary text-sm">
          Already have an account?{' '}
          <Link href={ROUTES.LOGIN} className="text-electric hover:text-electric-dark transition-colors">
            Sign in
          </Link>
        </p>
      </div>
    </form>
  );
}
