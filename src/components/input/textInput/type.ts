import {ChangeEvent} from "react";

export type TextInputProps = {
    type: string,
    label: string,
    placeHolder: string,
    variant?: "flat"| "bordered" | "underlined" | "faded",
    autoComplete?: string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void,
    value: string

}