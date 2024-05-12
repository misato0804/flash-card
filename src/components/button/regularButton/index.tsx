'use client'
import {Button} from "@nextui-org/react";
import {RegularButtonProps} from "@/components/button/regularButton/type";

const RegularButton : React.FC<RegularButtonProps>= ({ 
    text,
    color = 'default',
    disabled = false,
    onClick,
    className,
    style,
    size = 'md',
    variant = 'solid',
    type = 'button',
    ...props
}) => {
    return (
        <Button
        fullWidth
        color={color}
        disabled={disabled}
        onClick={onClick}
        className={className}
        style={style}
        size={size}
        variant={variant}
        type={type}
        {...props}
        >
            { text }
        </Button>
    );
};

export default RegularButton;