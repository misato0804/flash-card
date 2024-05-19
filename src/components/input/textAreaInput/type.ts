import { ChangeEventHandler } from "react"

export type TextAreaProps = {
    label: string,
    placeholder: string,
    value: string,
    onChange: ChangeEventHandler<HTMLTextAreaElement> 
}