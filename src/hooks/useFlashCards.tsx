import { Card } from "@/type/Card";
import { useCallback } from "react";
import { MemorizedStatus } from "@/type/CardStatus"

const useFlashCards = () => {

  const reviewCards = useCallback((card: Card, confidenceLevel: number) => {
    const updatedDate = new Date()

    switch ( card.status ) {
      case "NEW" :
        if( confidenceLevel === 3 ) {
          card.status = MemorizedStatus.FAMILIAR
          card.interval = 1
        } else if (confidenceLevel === 2) {
          card.status = MemorizedStatus.FAMILIAR
          card.interval = 1
        } else if (confidenceLevel === 1) {
          card.interval = 1
        } else {
          card.interval = 0
        }
        break;

      case "FAMILIAR" :
        if( confidenceLevel === 3 ) {
          card.status = MemorizedStatus.CONFIDENT
          card.interval = 6
        } else if (confidenceLevel === 2) {
          card.interval = 6
        } else if (confidenceLevel === 1) {
          card.interval = 1
        } else {
          card.status = MemorizedStatus.NEW
          card.interval = 0
        }
        break;
        
      case "CONFIDENT" :
        if ( confidenceLevel === 3 ) {
          card.status = MemorizedStatus.MASTERED;
          card.interval = 30;
        } else if (confidenceLevel === 2) {
          card.interval = 12;
        } else if (confidenceLevel === 1) {
          card.status = MemorizedStatus.FAMILIAR;
          card.interval = 6;
        } else {
          card.status = MemorizedStatus.FAMILIAR;
          card.interval = 1
        }
        break;
 
      case "MASTERED" :
        if ( confidenceLevel === 3 ) {
          card.interval = 30;
        } else if (confidenceLevel === 2) {
          card.interval = 20;
        } else if (confidenceLevel === 1) {
          card.status = MemorizedStatus.CONFIDENT;
          card.interval = 12;
        } else {
          card.status = MemorizedStatus.CONFIDENT;
          card.interval = 6
        }
        break; 
    }

    card.repetitions += 1
    card.easinessFactor += (0.1 - (3 - confidenceLevel) * (0.08 + (3 - confidenceLevel) * 0.02))
    if ( card.easinessFactor < 1.3) {
      card.easinessFactor = 1.3
    }

    card.reviewDate = new Date(updatedDate.getTime() + card.interval * 24 * 60 * 60 * 1000);
    return card
  }, [])

  const shuffleCards = (cards: Card[]) => {
    for ( let i = cards.length -1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]]
    }
    return cards
  }

  const dueCardFilter = (cards: Card[]) => {
    const filteredCards = cards.filter(card => new Date(card.reviewDate) <= new Date)
    return filteredCards
  }

  return {
    reviewCards,
    shuffleCards,
    dueCardFilter
  }
}

export default useFlashCards;