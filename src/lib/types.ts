export type User = {
  uid: string;
  email: string;
  displayName: string;
  photoURL?: string;
  bio?: string;
  skills?: string[];
  interests?: string[];
  startupStage?: string;
  location?: string;
  createdAt: Date;
  updatedAt: Date;
};

export type Post = {
  id: string;
  authorId: string;
  content: string;
  createdAt: Date;
  likes: number;
  likedBy: string[];
  comments: number;
  type: 'update' | 'achievement' | 'question';
  author?: User;
};

export type Connection = {
  id: string;
  userId: string;
  connectedUserId: string;
  status: 'pending' | 'accepted' | 'blocked';
  createdAt: Date;
};

export type ChatMessage = {
  id: string;
  senderId: string;
  content: string;
  createdAt: Date;
  type: 'user' | 'ai';
};

export type AuthContextType = {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, displayName: string) => Promise<void>;
  logout: () => Promise<void>;
  updateProfile: (data: Partial<User>) => Promise<void>;
};