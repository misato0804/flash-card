import {MouseEventHandler} from "react";

export type RegularButtonProps = {
    text: string,
    color: 'primary' | 'secondary' | 'content1' | 'content2',
    disabled? : boolean,
    onClick: (e: MouseEventHandler<HTMLButtonElement>) => void
}