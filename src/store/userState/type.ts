export type AuthUser = {
    email: string,
    uid: string
} | null


export type UserState = {
    user: AuthUser
    setUser: (user : AuthUser) => void,
    clearUser: () => void
}