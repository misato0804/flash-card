import { create } from "zustand";
import { UseAuthStoreState , User} from "@/store/userState/type";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { auth } from "@/app/_lib/firebase/config";
import firebase from "firebase/compat/app";

const useAuthStore = create<UseAuthStoreState>((set) => ({
  authUser: null,

  loading: true,

  setUser: (user: User | null) => set({ authUser: user }),

  clearUser: () => set({ authUser: null, loading: false }),

  initialize: () => {
    return onAuthStateChanged(auth, (user) => {
      if (user) {
        set({ authUser: user, loading: false });
      } else {
        set({ authUser: null, loading: false });
      }
    });
  },

 signIn: async (email, password) => {
    set({ loading: true });
    try {
            const url = '/api/auth/login'
            const res = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            })
            if (res.ok) {
                const data = await res.json()
                set({ authUser: data.user, loading: false });
            }
        } catch (e) {
            console.log(e)
        } 
  },

  signUp: async (email: string, password: string) => {
    try {
      const url = "/api/auth/login";
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      if (res.ok) {
        const data = await res.json();
        set({ authUser: data.user, loading: false });
    }
    } catch (e) {
      console.log(e);
    }
  },

  signOut: async() => {
    set({ loading: true });
    try {
        await firebase.auth().signOut();
        set({ authUser: null, loading: false });
      } catch (error) {
        set({ loading: false });
        throw error;
      }
  }
}));

export default useAuthStore;
