import { create } from "zustand";
import { UseCardStoreState } from "./type";
import { Card } from "@/type/Card";

const useCardStore = create<UseCardStoreState>((set) => ({
  cardLoading: false,
  getAllCards: async (deckId: string) => {
    set({ cardLoading: true });
    try {
      const url = `/api/decks/deck/cards?deck_id=${deckId}`;
      const res = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      const cards = data.cards;
      set({ cardLoading: false });
      return cards;
    } catch (e) {
      console.log(e);
    }
  },
  
  createCard: async (newCard: Card) => {
    set({ cardLoading: true });
    try {
      const url = "/api/card/create";
      const res = await fetch(url, {
        method: "POST",
        body: JSON.stringify({ newCard }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.ok) {
        set({ cardLoading: false });
      }
    } catch (e) {
      console.log(e);
    }
  },
  deleteCard: async (cardId: string) => {

  },

  updateCard: async (newCard: Card) => {
    set({ cardLoading: true });
    try {
      const url = `/api/card/${newCard.id}`;
      const res = await fetch(url, {
        method: "PATCH",
        body: JSON.stringify({ card: newCard }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if( res.ok ) {
        set({ cardLoading: false });
      }
    } catch (e) {
      console.log(e)
      set({ cardLoading: false });
    }
  },
}));
export default useCardStore;
