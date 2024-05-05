import {CardStatus} from "@/type/CardStatus";

export type Deck = {
    label: string,
    value: string,
    totalCards: number,
    newCards: CardStatus.New,
    familiarCard: CardStatus.Familiar,
    ConfidentCard: CardStatus.Confident,
    MasteredCard: CardStatus.Mastered,
}