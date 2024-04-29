import {create} from "zustand";
import {UserState, User} from "@/store/userState/type";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '@/app/_lib/firebase/config';

const useAuthStore = create<UserState>((setState) => ({
    user: null,
    setUser: (user) => setState({ user }),
    clearUser: () => setState({ user: undefined })
}))

onAuthStateChanged(auth, (user) => {
    if(user) {
        useAuthStore.setState({ user })
    } else {
        useAuthStore.setState({ user: undefined })
    }
})

export default useAuthStore