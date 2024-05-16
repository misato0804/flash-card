'use client'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, } from "@nextui-org/react";
import { useIsCreateDeckModalOpen } from "@/store/isCreateDeckModalOpen/useIsCreateDeckModalOpen";
import RegularButton from "@/components/button/regularButton";
import useDeckStore from "@/store/userDeckStore";
import { useState } from "react";
import TextInput from "@/components/input/textInput";

const CreateDeckModal = ({ uid }: { uid: string}) => {

    const [deckTitle, setDeckTitile] = useState<string>('')

    const { isOpen, onClose } = useIsCreateDeckModalOpen()
    const { createDeck, getAllDecks } = useDeckStore()
    
    const onClickHandler = () => {
        createDeck(uid, deckTitle)
        setDeckTitile('')
        onClose()
        getAllDecks(uid)
    }

    return (
        <>
            <Modal
                size={'md'}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Create New Deck</ModalHeader>
                            <ModalBody>
                                <TextInput
                                    type={"text"}
                                    label={"New Deck Title"}
                                    placeHolder={"new deck"}
                                    onChange={(e) => setDeckTitile(e.target.value)}
                                    value={deckTitle}
                                />
                            </ModalBody>
                            <ModalFooter>
                                <RegularButton text='Save' color={'secondary'} onClick={onClickHandler} />
                                <RegularButton text='Close' color={'primary'} onClick={onClose} />
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
};

export default CreateDeckModal;