import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  User as FirebaseUser,
} from 'firebase/auth';
import { auth, db } from './config';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { User } from '@/lib/types';

export const registerUser = async (
  email: string,
  password: string,
  displayName: string
): Promise<User> => {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );

  await updateProfile(userCredential.user, {
    displayName,
  });

  const user: User = {
    uid: userCredential.user.uid,
    email,
    displayName,
    photoURL: '',
    bio: '',
    skills: [],
    interests: [],
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  await setDoc(doc(db, 'users', userCredential.user.uid), user);

  return user;
};

export const loginUser = async (
  email: string,
  password: string
): Promise<FirebaseUser> => {
  const userCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password
  );
  return userCredential.user;
};

export const logoutUser = async (): Promise<void> => {
  await signOut(auth);
};

export const getUserProfile = async (uid: string): Promise<User | null> => {
  const userDoc = await getDoc(doc(db, 'users', uid));
  return userDoc.exists() ? (userDoc.data() as User) : null;
};

export const updateUserProfile = async (
  uid: string,
  data: Partial<User>
): Promise<void> => {
  await setDoc(
    doc(db, 'users', uid),
    {
      ...data,
      updatedAt: new Date(),
    },
    { merge: true }
  );
};