import firebase from "firebase/compat/app"

export type AuthUser = {
    email: string,
    uid: string
} | undefined | undefined

export type User = firebase.User

export type UserState = {
    user: User | null
    setUser: (user : User | null) => void,
    clearUser: () => void
}

