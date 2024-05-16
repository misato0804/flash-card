import {ChangeEventHandler} from "react";

export type SelectOption = {
    label: string,
    value: string
}

export type SelectInputProps = {
    label: string,
    options: SelectOption[],
    value: string,
    placeholder: string,
    onChange: ChangeEventHandler<HTMLSelectElement>
}