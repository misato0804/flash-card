'use client'
import DeckTable from "@/components/page/user/decks/DeckTable";
import useDeckStore from "@/store/userDeckStore";
import useAuthStore from '@/store/userState';
import { useEffect, useCallback, useMemo } from "react";

const UserDecksComponent = () => {
    const { authUser } = useAuthStore()
    const { getAllDecks, decks } = useDeckStore()

    const memoizedGetAllDecks = useCallback(() => {
        if (authUser) {
            getAllDecks(authUser.uid);
        }
    }, [authUser, getAllDecks]);

    useEffect(() => {
        memoizedGetAllDecks();
    }, [memoizedGetAllDecks]);

    const memoizedDecks = useMemo(() => decks, [decks]);

    return (
        <div className='w-full mt-24 max-w-4xl'>
            <DeckTable decks={memoizedDecks}/>
        </div>
    );
};

export default UserDecksComponent;