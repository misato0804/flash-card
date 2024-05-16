import { Deck } from "@/type/Deck";
import { UseDeckStoreState } from "./type";
import { create } from "zustand";

const useDeckStore = create<UseDeckStoreState>((set) => ({
  decks: [],

  setDecks: (decks: Deck[]) => set({ decks }),

  deckLoading: false,

  getAllDecks: async (uid: string) => {
    set({ deckLoading: true });
    try {
      const url = `/api/decks?uid=${uid}`;
      const res = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.ok) {
        const data = await res.json();
        set(() => ({ decks: data.decks, deckLoading: false }));
      } else {
        set(() => ({ decks: [], deckLoading: false }));
        throw new Error("Failed to log in: " + res.status);
      }
    } catch (e) {
      console.log(e);
      set(() => ({ decks: [], deckLoading: false }));
    }
  },

  deleteDeck: async () => {},

  updateDeck: async (deckId: string) => {},
}));
export default useDeckStore;
