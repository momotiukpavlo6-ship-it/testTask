"use client"
import { useEffect, useState } from "react";
import {ToastProps} from "@/app/components/Toast/ToastInterface";
import {getTypeColor} from "@/app/components/Toast/getColor";

export const Toast=({time, type, message}:ToastProps)=> {
    const [visible, setVisible] = useState(true);
    const [closing, setClosing] = useState(false);

    useEffect(() => {
        const timer1 = setTimeout(() => {
            setClosing(true);

            const timer2 = setTimeout(() => {
                setVisible(false);
            }, 400);

            return () => clearTimeout(timer2);
        }, time);

        return () => clearTimeout(timer1);
    }, [time]);

    if (!visible) return null;

    return (
        <div className={`fixed bottom-5 right-5 ${getTypeColor(type)} text-white shadow-xl p-4 rounded-md w-80 ${closing ? 'slide-out' : 'slide-in'}`}>
            <h1 className="text-2xl text-center font-semibold">{type}</h1>
            <p className="text-md text-center mt-2">{message}</p>
        </div>
    );
}