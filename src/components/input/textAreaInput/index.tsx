import {Textarea} from "@nextui-org/react";
import {TextAreaProps} from "@/components/input/textAreaInput/type";

const TextAreaInput = ({label, placeholder, value, onChange} : TextAreaProps) => {
    return (
        <Textarea
            variant='bordered'
            label={ label }
            labelPlacement="outside"
            placeholder={placeholder}
            className="col-span-12 md:col-span-6 mb-6 md:mb-0"
            value={value}
            onChange={onChange}
        />
    );
};

export default TextAreaInput;