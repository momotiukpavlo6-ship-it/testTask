import {ImCross} from "react-icons/im";

export const CrossButton=({setValue}:{ setValue : (value:string) => void})=>{

    return(
        <div className="flex justify-center items-center">
            <ImCross
                onClick={() => setValue("")}
                className="text-[#7f8c8d] cursor-pointer hover:text-[#3498db] transition-colors duration-200"/>
        </div>
    )
}
