'use client'
import {Modal, ModalBody, ModalContent, ModalFooter, ModalHeader} from "@nextui-org/react";
import {useIsCreateCardModalOpen} from "@/store/isCreateCardModalOpen/useIsCreateModalOpen";
import TextAreaInput from "@/components/input/textAreaInput";
import RegularButton from "@/components/button/regularButton";
import {animals} from "@/dammy/SelectList";
import SelectInput from "@/components/input/selectInput";

const CreateCardModal = () => {

    const {isOpen, onClose} = useIsCreateCardModalOpen()

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
                                label={'Input you want to remember'}
                                placeholder={'Input'}
                                value='Hello'
                                onChange={() => {}}
                            />
                            <TextAreaInput
                                label={'Input you want to remember'}
                                placeholder={'Input'}
                                value='Hello'
                                onChange={() => {}}
                            />
                            <SelectInput label={'choose deck'} options={animals} value={'animal'} placeholder={'choose deck'} onChange={() => {}}/>

                        </ModalBody>
                        <ModalFooter>
                            <RegularButton text='Save' color={'secondary'} onClick={onClose}/>
                            <RegularButton text='Close' color={'primary'} onClick={onClose}/>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
};

export default CreateCardModal;