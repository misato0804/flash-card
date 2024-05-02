export type User = {
    uid: string,
    email: string | null,
}

export type UseAuthStoreState = {
    authUser: User | null;
    loading: boolean;
    setUser: (user: User | null) => void;
    clearUser: () => void;
    initialize: () => () => void;
    signIn: (email: string, password: string) => Promise<void>;
    signUp: (email: string, password: string) => Promise<void>;
    signOut: () => Promise<void>;
};
