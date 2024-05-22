'use client'
import RegularButton from "@/components/button/regularButton"
import QuizPopupModal from "@/components/modal/quizPopupModal"
import { useQuizModalOpen } from "@/store/isQuizModalOpen"
import useCardStore from "@/store/useCardStore"
import useDeckStore from "@/store/userDeckStore"
import { Card } from "@/type/Card"
import { Deck } from "@/type/Deck"
import { useCallback, useEffect, useMemo, useState } from "react"

const DeckComponent = ({ deck_id }: { deck_id: string }) => {

  const { getDeck, deckLoading } = useDeckStore()
  const [deck, setDeck] = useState<Deck | undefined>()
  const [cards, setCards] = useState<Card[] | undefined>()
  const { onQuizOpen, isOpen } = useQuizModalOpen()
  const { getAllCards, cardLoading } = useCardStore()

  const memorizedDeck = useCallback(async () => {
    const newDeck: Deck | undefined = await getDeck(deck_id)
    if (newDeck) {
      setDeck(newDeck)
    } else return
  }, [deck_id, getDeck])

  const memorizedCards = useCallback(async() => {
    const cards : Card[] | undefined = await getAllCards(deck_id)
    if( cards ) {
      setCards(cards)
    } else return
  }, [deck_id, getAllCards])

  useEffect(() => {
    memorizedDeck()
    memorizedCards()
  }, [memorizedCards, memorizedDeck])

  if (deckLoading) {
    return (
      <div className='flex justify-center'>
        <h1>Deck Loading</h1>
      </div>
    )
  }

  if (deck) {
    return (
      <div className='flex justify-center w-full'>
        <div>
          <h1 className="font-bold text-3xl text-center">{deck.title}</h1>
          <ul className="my-8 w-60 mx-auto">
            <li className="my-4 font-semibold flex justify-between">
              <h4 className="">
                New
              </h4>
              <p className="">
                {deck.cardStatus!.New.toString()}
              </p>
            </li>
            <li className="my-4 font-semibold flex justify-between">
              <h4 className="">
                Familiar
              </h4>
              <p className="">
                {deck.cardStatus!.Familiar.toString()}
              </p>
            </li>
            <li className="my-4 font-semibold flex justify-between">
              <h4 className="">
                Confident
              </h4>
              <p className="">
                {deck.cardStatus!.Confident.toString()}
              </p>
            </li>
            <li className="my-4 font-semibold flex justify-between">
              <h4 className="">
                Mastered
              </h4>
              <p className="">
                {deck.cardStatus!.Mastered.toString()}
              </p>
            </li>
          </ul>
          <RegularButton 
          text={"Start study"} 
          color="secondary" 
          onClick={onQuizOpen}
          />
        </div>
        { isOpen && cards && <QuizPopupModal cards={cards} deckTitle={deck.title}/> }
      </div>
    )
  }

  return (
    <div className='flex justify-center'>
      <h2 className="text-3xl font-bold">Deck not found</h2>
    </div>
  );

}

export default DeckComponent