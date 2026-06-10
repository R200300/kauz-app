'use client';

import React from 'react';
import { Post, User } from '@/lib/types';
import { FeedPost } from './FeedPost';
import { LoadingSpinner } from '@/components/common/LoadingSpinner';

interface FeedListProps {
  posts: (Post & { author?: User })[];
  loading?: boolean;
  onLike?: (postId: string) => void;
  onComment?: (postId: string) => void;
  onShare?: (postId: string) => void;
  onLoadMore?: () => void;
}

export const FeedList: React.FC<FeedListProps> = ({
  posts,
  loading = false,
  onLike,
  onComment,
  onShare,
  onLoadMore,
}) => {
  if (loading && posts.length === 0) {
    return <LoadingSpinner message="Loading feed..." />;
  }

  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">No posts yet. Start following founders!</p>
      </div>
    );
  }

  return (
    <div>
      {posts.map((post) => (
        <FeedPost
          key={post.id}
          post={post}
          onLike={onLike}
          onComment={onComment}
          onShare={onShare}
        />
      ))}
      {loading && <LoadingSpinner size="sm" message="Loading more..." />}
    </div>
  );
};