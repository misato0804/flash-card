'use client'
import {Button} from "@nextui-org/react";
import {RegularButtonProps} from "@/components/button/regularButton/type";

/**
 * Todo:
 *  Adding onClick
 */
const RegularButton = ({ text, color, disabled, onClick}: RegularButtonProps) => {
    return (
        <Button
            fullWidth
            color={"secondary"}
            onClick={onClick}
            disabled={disabled}
        >
            { text }
        </Button>
    );
};

export default RegularButton;