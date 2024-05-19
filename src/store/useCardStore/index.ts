import { create } from "zustand";
import { UseCardStoreState } from "./type";
import { Card } from "@/type/Card";

const useCardStore = create<UseCardStoreState>((set) => ({
  cardLoading: false,
  getAllCards: async (deckId: string) => {},
  createCard: async (newCard: Card) => {
    set({ cardLoading: true });
    try {
      const url = "/api/card/create";
      const res = await fetch(url, {
        method: "POST",
        body: JSON.stringify({ newCard }),
        headers: {
          "Content-Type": "application/json",
        }
      });

      if( res.ok ) {
        set({ cardLoading: false });
      }
    } catch (e) {}
  },
  deleteCard: async (cardId: string) => {},
  updateCard: async (newCard: Card) => {},
  updateCardStatus: async () => {},
  // c: [],

  // setDecks: (decks: Deck[]) => set({ decks }),

  // deckLoading: false,

  // getAllDecks: async (uid: string) => {
  //   set({ deckLoading: true });
  //   try {
  //     const url = `/api/decks?uid=${uid}`;
  //     const res = await fetch(url, {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });
  //     if (res.ok) {
  //       const data = await res.json();
  //       set(() => ({ decks: data.decks, deckLoading: false }));
  //     } else {
  //       set(() => ({ decks: [], deckLoading: false }));
  //       throw new Error("Failed to log in: " + res.status);
  //     }
  //   } catch (e) {
  //     console.log(e);
  //     set(() => ({ decks: [], deckLoading: false }));
  //   }
  // },

  // deleteDeck: async () => {},

  // updateDeck: async (deckId: string) => {},

  // createDeck: async (uid: string, title: string) => {
  //   set({ deckLoading: true });
  //   try {
  //     const url = "/api/decks/deck";
  //     const cardStatus: CardStatus = {
  //       New: 0,
  //       Familiar: 0,
  //       Confident: 0,
  //       Mastered: 0
  //     }

  //     const res = await fetch(url, {
  //       method: "POST",
  //       body: JSON.stringify({ uid, title, cardStatus }),
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });

  //     if (res.ok) {
  //       set(() => ({ deckLoading: false }));
  //     } else {
  //       throw new Error();
  //     }
  //   } catch (e) {
  //     console.log(e)
  //   }
  // },
}));
export default useCardStore;
