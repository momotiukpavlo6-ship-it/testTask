import { Dispatch, SetStateAction } from "react";

export interface ListProps {
    title: string;
    items?: string[];
    isOpenEl: { [key: string]: boolean };
    setIsOpenEl: Dispatch<SetStateAction<{ [p: string]: boolean }>>
}
