'use client'
import {Modal, ModalBody, ModalContent, ModalFooter, ModalHeader} from "@nextui-org/react";
import {useIsCreateCardModalOpen} from "@/store/isCreateCardModalOpen/useIsCreateModalOpen";
import TextAreaInput from "@/components/input/textAreaInput";
import RegularButton from "@/components/button/regularButton";
import SelectInput from "@/components/input/selectInput";
import useDeckStore from "@/store/userDeckStore";
import { ChangeEvent, ChangeEventHandler, useState } from "react";
import useCardStore from "@/store/useCardStore";
import { MemorizedStatus } from "@/type/CardStatus";

const CreateCardModal = ({ uid }: { uid: string}) => {

    const {isOpen, onClose} = useIsCreateCardModalOpen()
    const { decks, getAllDecks } = useDeckStore()
    const { createCard, cardLoading } = useCardStore()

    const [front, setFront] = useState('')
    const [back, setBack] = useState('')

    const [deckId, setDeckId] = useState('')

    const deckOption = decks.map(deck => ({
        label: deck.title,
        value: deck.id
    }))

    const deckIdHandler: ChangeEventHandler<HTMLSelectElement> = (e) => {
        setDeckId(e.target.value)
    }

    const frontCardHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setFront(e.target.value)
    }
    
    const backCardHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setBack(e.target.value)
    }

    const createCardHandler =async () => {

        if ( front.length === 0 || back.length === 0 ) {
            return
        }

        await createCard({
            deckId,
            front,
            back,
            status: MemorizedStatus.NEW,
            repetitions: 0,
            reviewDate: new Date(),
            interval: 1,
            easinessFactor: 2.5
        })

        setFront('')
        setBack('')
        setDeckId('')
        await getAllDecks(uid)
        !cardLoading && onClose()
    }

    return (
        <Modal
            size={'xl'}
            isOpen={isOpen}
            onClose={onClose}
        >
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1">Create New Card</ModalHeader>
                        <ModalBody>
                            <TextAreaInput
                                label={'Front'}
                                placeholder={''}
                                value={front}
                                onChange={frontCardHandler}
                            />
                            <TextAreaInput
                                label={'Back'}
                                placeholder={''}
                                value={back}
                                onChange={backCardHandler}
                            />
                            <SelectInput label={'choose deck'} options={deckOption} value={'decks'} placeholder={'choose deck'} onChange={deckIdHandler}/>

                        </ModalBody>
                        <ModalFooter>
                            <RegularButton text='Close' color={'primary'} onClick={onClose}/>
                            <RegularButton text='Save' color={'secondary'} onClick={createCardHandler}/>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
};

export default CreateCardModal;