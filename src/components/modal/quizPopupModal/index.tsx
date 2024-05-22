'use client'
import RegularButton from "@/components/button/regularButton";
import { useQuizModalOpen } from "@/store/isQuizModalOpen";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@nextui-org/react";
import { Card } from "@/type/Card";
import { IoBookOutline } from "react-icons/io5";
import { useState } from "react";

const QuizPopupModal = ({ cards, deckTitle }: { cards: Card[], deckTitle: string }) => {

  const { onQuizClose, onQuizOpen, isOpen } = useQuizModalOpen()
  const [showTheAnswer, setShowTheAnswer] = useState<boolean>(false)

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
                    {cards[2].front}
                  </div>
                  <hr />
                  <div className="flex justify-center front min-h-20 items-center">
                    {showTheAnswer && cards[2].back}
                  </div>
                  {
                    showTheAnswer &&
                    (
                      <div className="flex gap-6">
                        <RegularButton text='Exit the quiz' onClick={onQuizClose} />
                        <RegularButton text='Exit the quiz' onClick={onQuizClose} />
                        <RegularButton text='Exit the quiz' onClick={onQuizClose} />
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