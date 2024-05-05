'use client'
import React from 'react';
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, } from "@nextui-org/react";
import {useIsCreateDeckModalOpen} from "@/store/isCreateDeckModalOpen/useIsCreateDeckModalOpen";


const CreateDeckModal = () => {

    const { isOpen, onOpen, onClose, toggle} = useIsCreateDeckModalOpen()
    console.log('gekki')
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
                            <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
                            <ModalBody>
                                <h1>Hello</h1>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                                <Button color="primary" onPress={onClose}>
                                    Action
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
};

export default CreateDeckModal;