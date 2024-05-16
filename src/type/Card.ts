import { CardStatus } from "./CardStatus"

export type Card = {
  id: string,
  deckId: string,
  front: string,
  back: string,
  status: CardStatus
  repetitions: number,
  reviewDate: Date,
  interval: number,
  easinessFactor: number
}