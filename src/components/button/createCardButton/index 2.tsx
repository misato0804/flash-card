import React from 'react';
import {PlusIcon} from "@/components/elements/icons/PlusIcon";
import {Button, useDisclosure} from "@nextui-org/react";
import {useIsCreateModalOpen} from "@/store/isCreateCardModalOpen/useIsCreateModalOpen";
import {Tooltip} from "@nextui-org/tooltip";

const CreateCardButton = () => {
    const { onOpen } = useIsCreateModalOpen()

    const handleOpen = () => {
        onOpen();
    }
    return (
        <div className="flex gap-4 items-center fixed bottom-12 right-4">
            <Tooltip content="Create New Card" placement="left-start">
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