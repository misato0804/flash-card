'use client'
import {Button} from "@nextui-org/react";
import {RegularButtonProps} from "@/components/button/regularButton/type";

/**
 * Todo:
 *  Adding onClick
 */
const RegularButton = ({ text, color }: RegularButtonProps) => {
    return (
        <Button
            fullWidth
            color={"secondary"}
            onClick={() => console.log('clicked!')}
        >
            { text }
        </Button>
    );
};

export default RegularButton;