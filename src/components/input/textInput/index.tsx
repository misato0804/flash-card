import React from 'react';
import {Input} from "@nextui-org/react";
import {TextInputProps} from "@/components/input/textInput/type";

const TextInput = ({type, variant, label, placeHolder, autoComplete, onChange, value} : TextInputProps) => {


    return (
        <div key={variant} className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
            <Input
                type={ type }
                variant={variant ? variant : 'underlined'}
                label={ label}
                placeholder={placeHolder}
                autoComplete={autoComplete}
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

export default TextInput;