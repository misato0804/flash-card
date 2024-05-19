import { Deck } from "@/type/Deck";
import { UseDeckStoreState } from "./type";
import { create } from "zustand";
import { CardStatus } from "@/type/CardStatus";

const useDeckStore = create<UseDeckStoreState>((set) => ({
  decks: [],

  setDecks: (decks: Deck[]) => set({ decks }),

  deckLoading: false,

  getDeck: async (deck_id: string): Promise<Deck | undefined> => {
    set({ deckLoading: true });
    try {
      const url = `/api/decks/${deck_id}`
      const res = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      })

      if(res.ok) {
        const data = await res.json();
        set({ deckLoading: false });
        return data.deck
      }
    } catch(e) {
        console.log(e)
        set({ deckLoading: false });
        return
    }
  },

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

  createDeck: async (uid: string, title: string) => {
    set({ deckLoading: true });
    try {
      const url = "/api/decks/deck";
      const cardStatus: CardStatus = {
        New: 0,
        Familiar: 0,
        Confident: 0,
        Mastered: 0
      }

      const res = await fetch(url, {
        method: "POST",
        body: JSON.stringify({ uid, title, cardStatus }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.ok) {
        set(() => ({ deckLoading: false }));
      } else {
        throw new Error();
      }
    } catch (e) {
      console.log(e)
    }
  },
}));
export default useDeckStore;
