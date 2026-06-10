'use client';

import { Post } from '@/types';
import { Avatar } from '@/components/common/Avatar';
import { Card } from '@/components/common/Card';
import { getRelativeTime } from '@/lib/utils';

interface FeedCardProps {
  post: Post & { author?: { displayName: string; photoURL?: string } };
  onLike?: () => void;
  onComment?: () => void;
  isLiked?: boolean;
}

export function FeedCard({ post, onLike, onComment, isLiked }: FeedCardProps) {
  return (
    <Card className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Avatar alt={post.author?.displayName || 'User'} src={post.author?.photoURL} />
          <div>
            <p className="font-semibold text-text-primary">{post.author?.displayName || 'Anonymous'}</p>
            <p className="text-text-secondary text-sm">{getRelativeTime(post.createdAt)}</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <p className="text-text-primary leading-relaxed">{post.content}</p>

      {/* Image */}
      {post.image && (
        <img src={post.image} alt="Post" className="w-full rounded-lg object-cover max-h-96" />
      )}

      {/* Stats */}
      <div className="flex gap-4 text-text-secondary text-sm border-t border-gray-light pt-3">
        <span>{post.likes} likes</span>
        <span>{post.comments} comments</span>
        <span>{post.shares} shares</span>
      </div>

      {/* Actions */}
      <div className="flex gap-2">
        <button
          onClick={onLike}
          className={`flex-1 py-2 px-4 rounded-lg transition-colors ${
            isLiked
              ? 'bg-electric text-black font-semibold'
              : 'bg-gray-light text-text-primary hover:bg-gray-light hover:text-electric'
          }`}
        >
          ♥ Like
        </button>
        <button
          onClick={onComment}
          className="flex-1 py-2 px-4 bg-gray-light rounded-lg text-text-primary hover:text-electric transition-colors"
        >
          💬 Comment
        </button>
      </div>
    </Card>
  );
}
