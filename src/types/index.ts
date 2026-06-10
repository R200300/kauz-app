export interface User {
  id: string;
  email: string;
  displayName: string;
  photoURL?: string;
  bio?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Post {
  id: string;
  authorId: string;
  content: string;
  image?: string;
  likes: number;
  comments: number;
  shares: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Comment {
  id: string;
  postId: string;
  authorId: string;
  content: string;
  likes: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Founder {
  id: string;
  userId: string;
  name: string;
  title: string;
  bio: string;
  avatar: string;
  startup?: {
    name: string;
    description: string;
    industry: string;
    stage: string;
  };
  followers: number;
  connections: number;
  isVerified: boolean;
  createdAt: Date;
}
