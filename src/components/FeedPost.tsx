'use client';

import React, { useState } from 'react';
import { Avatar } from '@/components/Avatar';
import { Button } from '@/components/common/Button';
import { Post, User } from '@/lib/types';
import { Heart, MessageCircle, Share2 } from 'lucide-react';
import clsx from 'clsx';

interface FeedPostProps {
  post: Post & { author?: User };
  onLike?: (postId: string) => void;
  onComment?: (postId: string) => void;
  onShare?: (postId: string) => void;
}

export const FeedPost: React.FC<FeedPostProps> = ({
  post,
  onLike,
  onComment,
  onShare,
}) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
    onLike?.(post.id);
  };

  const formatDate = (date: Date) => {
    const now = new Date();
    const diffInSeconds = Math.floor(
      (now.getTime() - new Date(date).getTime()) / 1000
    );

    if (diffInSeconds < 60) return 'just now';
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`;
    return `${Math.floor(diffInSeconds / 86400)}d ago`;
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 mb-4 hover:shadow-md transition-shadow">
      <div className="flex items-start gap-3">
        <Avatar src={post.author?.photoURL} alt={post.author?.displayName || 'User'} size="md" />
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold text-gray-900">
                {post.author?.displayName}
              </p>
              <p className="text-sm text-gray-500">
                {formatDate(post.createdAt)}
              </p>
            </div>
            <span className="text-xs font-medium px-2 py-1 bg-blue-100 text-blue-700 rounded-full">
              {post.type}
            </span>
          </div>

          <p className="mt-3 text-gray-800 leading-relaxed">{post.content}</p>

          <div className="mt-4 flex items-center justify-between text-gray-500 text-sm">
            <button className="hover:text-blue-500">
              {post.likes} likes
            </button>
            <button className="hover:text-blue-500">
              {post.comments} comments
            </button>
          </div>

          <div className="mt-4 flex items-center gap-2 border-t border-gray-100 pt-4">
            <button
              onClick={handleLike}
              className={clsx(
                'flex-1 flex items-center justify-center gap-2 py-2 rounded-lg transition-colors',
                isLiked
                  ? 'text-red-500 bg-red-50'
                  : 'text-gray-500 hover:bg-gray-50'
              )}
            >
              <Heart
                size={18}
                fill={isLiked ? 'currentColor' : 'none'}
              />
              Like
            </button>
            <button
              onClick={() => onComment?.(post.id)}
              className="flex-1 flex items-center justify-center gap-2 py-2 text-gray-500 hover:bg-gray-50 rounded-lg transition-colors"
            >
              <MessageCircle size={18} />
              Comment
            </button>
            <button
              onClick={() => onShare?.(post.id)}
              className="flex-1 flex items-center justify-center gap-2 py-2 text-gray-500 hover:bg-gray-50 rounded-lg transition-colors"
            >
              <Share2 size={18} />
              Share
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};