"use client";
import { useState } from "react";
import {CrossButton} from "@/app/components/Input/shared/CrossButton";
import {InputItem} from "@/app/components/Input/shared/InputItem";
import { InputProps } from "@/app/components/Input/InputInterface";
import {EyeButton} from "@/app/components/Input/shared/EyeButton";

export const Input = ({ type, clearable = false }: InputProps) => {
    const [value, setValue] = useState<string | undefined>("");
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (type === "password") setIsVisible((prev) => !prev);
    };

    return (
        <div className="bg-[#1f2328] p-7 rounded-2xl shadow-xl max-w-sm w-full flex flex-row justify-between gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
            <div className="relative w-full">
                <InputItem isVisible={isVisible} type={type} value={value} setValue={setValue}/>
                {type === "password" && (<EyeButton toggleVisibility={toggleVisibility} isVisible={isVisible}/>)}
            </div>
            {clearable && (<CrossButton setValue={setValue}/>)}
        </div>
    );
};
