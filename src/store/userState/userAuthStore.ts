import {create} from "zustand";
import {UserState} from "@/store/userState/type";

const useAuthStore = create<UserState>((setState) => ({
    user: null,
    setUser: (user) => setState({ user }),
    clearUser: () => setState({ user: null })
}))

export default useAuthStore