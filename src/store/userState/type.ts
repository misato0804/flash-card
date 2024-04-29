import { User } from 'firebase/auth';

export type AuthUser = {
    email: string,
    uid: string
} | undefined | undefined

export type UserState = {
    user: User | null
    setUser: (user : User | null) => void,
    clearUser: () => void
}

