'use client';

export function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="relative">
        <div className="animate-spin rounded-full h-12 w-12 border-2 border-gray-light border-t-electric" />
        <div className="mt-4 text-center text-text-secondary">Loading...</div>
      </div>
    </div>
  );
}
