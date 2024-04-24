import {MouseEventHandler} from "react";

export type RegularButtonProps = {
    text: string,
    color: any,
    disabled? : boolean,
    onClick:MouseEventHandler<HTMLButtonElement>;
}