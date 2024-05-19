import { CardStatus, MemorizedStatus } from "./CardStatus"

export type Card = {
  id?: string,
  deckId: string,
  front: string,
  back: string,
  status: MemorizedStatus
  repetitions: number,
  reviewDate: Date,
  interval: number,
  easinessFactor: number
}