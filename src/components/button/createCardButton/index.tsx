import React from 'react';
import {PlusIcon} from "@/components/elements/icons/PlusIcon";
import {Button, useDisclosure} from "@nextui-org/react";
import {Tooltip} from "@nextui-org/tooltip";
import { useIsCreateDeckModalOpen } from '@/store/isCreateDeckModalOpen/useIsCreateDeckModalOpen';

const CreateCardButton = () => {
    const { onOpen } = useIsCreateDeckModalOpen()

    const handleOpen = () => {
        onOpen();
    }
    return (
        <div className="flex gap-4 items-center fixed bottom-12 right-4">
            <Tooltip content="Create New Deck" placement="left-start">
            <Button
                isIconOnly
                color="secondary"
                aria-label="Add"
                className='rounded-[50%]'
                onClick={handleOpen}
            >
                <PlusIcon />
            </Button>
            </Tooltip>
        </div>
    );
};

export default CreateCardButton;