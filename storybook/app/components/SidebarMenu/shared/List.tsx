import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { ListProps } from "./Listinterface";

export const List = ({ isOpenEl, setIsOpenEl, title, items = [] }: ListProps) => {
    const isOpen = isOpenEl[title];

    const toggle = () => {
        setIsOpenEl(prev => ({ ...prev, [title]: !prev[title] }));
    };

    return (
        <div className="w-full">
            <div className="flex justify-between items-center cursor-pointer" onClick={toggle}>
                <h2 className="text-xl font-medium">{title}</h2>
                {isOpen ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
            </div>
            <ul className={`mt-2 ml-2 flex flex-col gap-2 text-base text-gray-300 ${isOpen ? 'block fade-in' : 'hidden'}`}>
                {items.map((item, idx) => (
                    <li key={idx} className="hover:text-white cursor-pointer">{item}</li>
                ))}
            </ul>
        </div>
    );
};
