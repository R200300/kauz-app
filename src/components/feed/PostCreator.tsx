'use client';

import { useState } from 'react';
import { Button } from '@/components/common/Button';
import { Card } from '@/components/common/Card';
import { Avatar } from '@/components/common/Avatar';

interface PostCreatorProps {
  userAvatar?: string;
  userName: string;
  onSubmit: (content: string) => Promise<void>;
  isLoading?: boolean;
}

export function PostCreator({ userAvatar, userName, onSubmit, isLoading }: PostCreatorProps) {
  const [content, setContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (!content.trim()) return;

    setIsSubmitting(true);
    try {
      await onSubmit(content);
      setContent('');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="max-w-2xl space-y-4">
      <div className="flex gap-3">
        <Avatar alt={userName} src={userAvatar} />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="What's on your mind?"
          className="flex-1 bg-gray-light text-text-primary placeholder-text-secondary rounded-lg px-4 py-3 resize-none focus:outline-none focus:ring-1 focus:ring-electric"
          rows={3}
        />
      </div>

      <div className="flex justify-end gap-2">
        <Button variant="ghost" onClick={() => setContent('')} disabled={!content.trim()}>
          Cancel
        </Button>
        <Button
          variant="primary"
          onClick={handleSubmit}
          isLoading={isSubmitting || isLoading}
          disabled={!content.trim()}
        >
          Post
        </Button>
      </div>
    </Card>
  );
}
