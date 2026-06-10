'use client';

import { Post } from '@/types';
import { FeedCard } from './FeedCard';

interface FeedListProps {
  posts: (Post & { author?: { displayName: string; photoURL?: string } })[];
  isLoading?: boolean;
  hasMore?: boolean;
  onLoadMore?: () => void;
}

export function FeedList({ posts, isLoading, hasMore, onLoadMore }: FeedListProps) {
  if (posts.length === 0 && !isLoading) {
    return (
      <div className="text-center py-12">
        <p className="text-text-secondary text-lg">No posts yet. Start following founders!</p>
      </div>
    );
  }

  return (
    <div className="space-y-4 max-w-2xl">
      {posts.map((post) => (
        <FeedCard key={post.id} post={post} />
      ))}

      {isLoading && (
        <div className="flex justify-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-2 border-gray-light border-t-electric" />
        </div>
      )}

      {hasMore && !isLoading && (
        <button
          onClick={onLoadMore}
          className="w-full py-3 text-electric hover:text-electric-dark transition-colors"
        >
          Load More
        </button>
      )}
    </div>
  );
}
