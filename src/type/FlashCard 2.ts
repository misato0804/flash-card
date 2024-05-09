import {CardStatus} from "@/type/CardStatus";

export type FlashCard = {
    userId: string,
    id: string,
    word: string,
    meaning: string,
    deck: string,
    registeredDate: Date;
    visitTimes: number;
    status: CardStatus,
    lastReviewed: Date;
    nextReviewDate: Date;
}