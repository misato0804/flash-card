import React from 'react';
import { SelectInputProps } from "@/components/input/selectInput/type";
import { Select, SelectItem } from '@nextui-org/react';

const SelectInput = ({ label, value, options, placeholder, onChange }: SelectInputProps) => {
    return (
        <div>
            {label && <label>{label}</label>}
            <Select
                label={label}
                value={value}
                // placeholder={placeholder}
                onChange={onChange}
            >
                {options.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                        {option.label}
                    </SelectItem>
                ))}
            </Select>
        </div>
    );
};

export default SelectInput;