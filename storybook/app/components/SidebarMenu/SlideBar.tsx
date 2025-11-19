"use client"
import { TiThMenu } from "react-icons/ti";
import { List } from "./shared/List";
import {useState} from "react";

export const SlideBar = () => {
    const [isOpenEl, setIsOpenEl] = useState<{ [key: string]: boolean }>({
        profile: false,
        setting: false
    });

    const [visible, setVisible] = useState(true);

    const sections = [
        { title: "Profile", items: ["Profile one", "Profile two"] },
        { title: "Setting", items: ["Setting one", "Setting two", "Setting three"] }
    ];

if (visible){
    return (
        <nav className="bg-[#1f2328] h-full w-[320px] absolute left-0 text-white shadow-xl slide-in">
            <div className="flex justify-between items-center px-6 py-4 text-2xl border-b border-gray-700">
                <h1 className="font-semibold">Slide Bar</h1>
                <TiThMenu onClick={()=>setVisible(false)} className="cursor-pointer"/>
            </div>

            <div className="flex flex-col gap-6 p-6 text-lg">
                {sections.map(section => (
                    <List
                        key={section.title}
                        title={section.title}
                        items={section.items}
                        isOpenEl={isOpenEl}
                        setIsOpenEl={setIsOpenEl}
                    />
                ))}

                <div className="w-full">
                    <h2 className="text-xl font-medium cursor-pointer">Storybook</h2>
                </div>

            </div>
        </nav>
    )
}else{
    return (<nav className=" absolute top-6 left-10 text-white shadow-xl "> <TiThMenu onClick={()=>setVisible(true)} className="cursor-pointer  text-2xl slide-in-right"/></nav>);
}
};
