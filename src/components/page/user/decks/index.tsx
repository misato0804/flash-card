'use client'
import DeckTable from "@/components/page/user/decks/DeckTable";
import useDeckStore from "@/store/userDeckStore";
import useAuthStore from '@/store/userState';
import { useEffect, useCallback, useMemo } from "react";

const UserDecksComponent = () => {
    const { authUser } = useAuthStore()
    const { getAllDecks, decks, deckLoading } = useDeckStore()

    const memoizedGetAllDecks = useCallback(() => {
        if (authUser) {
            getAllDecks(authUser.uid);
        }
    }, [authUser, getAllDecks]);

    useEffect(() => {
        memoizedGetAllDecks();
    }, [memoizedGetAllDecks]);

    const memoizedDecks = useMemo(() => decks, [decks]);

    if (authUser) {
        return (
            <DeckTable decks={memoizedDecks} loading={deckLoading} uid={authUser?.uid} />
        );
    } else {
        return <div>Loading</div>
    };
};

export default UserDecksComponent;