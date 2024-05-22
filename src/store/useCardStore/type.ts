import { Card } from "@/type/Card"

export type UseCardStoreState = {
  cardLoading: boolean
  getAllCards: (deckId: string) => Promise<Card[]>,
  createCard: (newCard: Card) => Promise<void>,
  deleteCard: (cardId: string) => Promise<void>,
  updateCard: (newCard: Card) => Promise<void>
  updateCardStatus: () => Promise<void>
}