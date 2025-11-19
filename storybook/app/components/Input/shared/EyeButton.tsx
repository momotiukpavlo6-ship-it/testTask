import {FaEye, FaEyeSlash} from "react-icons/fa";
import {SharedProps} from "./SharedInterface";

export const EyeButton=({toggleVisibility, isVisible}:SharedProps)=>{
    return(
        <button
            type="button"
            onClick={toggleVisibility}
            className=" absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#3498db] transition-colors">
            {isVisible ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
        </button>
    )
}