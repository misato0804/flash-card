import { Deck } from "@/type/Deck"

export type UseDeckStoreState = {
  decks: Deck[] | [],
  setDecks: (decks: Deck[]) => void,
  deckLoading: boolean,
  getAllDecks: (uid: string) => Promise<void>,
  deleteDeck: (deckId: string) => void,
  updateDeck: (deckId: string) => Promise<void>,
  createDeck: (uid: string, title: string) => Promise<void>
}
