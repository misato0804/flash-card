import { auth } from '@/app/_lib/firebase/config';
import { User } from '@/store/userState/type'
import { onAuthStateChanged } from 'firebase/auth';
import { useState, useEffect } from 'react';

export const useCurrentUser = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      setUser(user);
    });
    return unsubscribe;

  }, []);

  return user

}