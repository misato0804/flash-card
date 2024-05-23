'use client'
import RegularButton from "@/components/button/regularButton";
import { useQuizModalOpen } from "@/store/isQuizModalOpen";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@nextui-org/react";
import { Card } from "@/type/Card";
import { IoBookOutline } from "react-icons/io5";
import { useState } from "react";
import useFlashCards from "@/hooks/useFlashCards";
import useCardStore from "@/store/useCardStore";

const QuizPopupModal = ({ cards, deckTitle }: { cards: Card[], deckTitle: string }) => {

  const { onQuizClose, onQuizOpen, isOpen } = useQuizModalOpen()
  const [showTheAnswer, setShowTheAnswer] = useState<boolean>(false)
  const {reviewCards} = useFlashCards()
  const {updateCard} = useCardStore()
  
  const [currentCardIndex, setCurrentCardIndex] = useState(0)

  const handleCardUpdate = async (confidentLevel: number) => {
    setShowTheAnswer(false)
    const currentCard = cards[currentCardIndex]
    const updatedCard = reviewCards(currentCard, confidentLevel)
    try {
      await updateCard(updatedCard)
      setCurrentCardIndex((currentCardIndex + 1)% cards.length)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <Modal
      size={'2xl'}
      isOpen={isOpen}
      onClose={onQuizClose}
    >
      <ModalContent className="">
        {
          (onQuizClose) => (
            <div className='flex justify-center w-full'>
              <div className="w-full">
                <ModalHeader className="flex items-center gap-2">
                  <IoBookOutline />
                  {deckTitle}
                </ModalHeader>
                <ModalBody>
                  <div className="flex justify-center front min-h-20 items-center">
                    {cards[currentCardIndex].front}
                  </div>
                  <hr />
                  <div className="flex justify-center front min-h-20 items-center">
                    {showTheAnswer && cards[currentCardIndex].back}
                  </div>
                  {
                    showTheAnswer &&
                    (
                      <div className="flex gap-6">
                        <RegularButton text='Again' onClick={() => handleCardUpdate(0)} />
                        <RegularButton text='Hard' onClick={() => handleCardUpdate(1)} />
                        <RegularButton text='Good' onClick={() => handleCardUpdate(2)} />
                        <RegularButton text='Easy' onClick={() => handleCardUpdate(3)} />
                      </div>
                    )
                  }
                </ModalBody>
                <ModalFooter>
                  <RegularButton text='Exit the quiz' onClick={onQuizClose} />
                  {
                    !showTheAnswer && <RegularButton text='Show the answer' onClick={() => setShowTheAnswer(true)} />
                  }
                </ModalFooter>
              </div>
            </div>
          )
        }
      </ModalContent>
    </Modal>
  )
}

export default QuizPopupModal