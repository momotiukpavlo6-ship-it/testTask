import {SharedProps} from "@/app/components/Input/shared/SharedInterface";

export const InputItem=({isVisible, type, value, setValue}:SharedProps)=>{
    return(
        <input
            value={value}
            onChange={(e) => setValue?.(e.target.value)}
            placeholder={`Enter ${type}...`}
            type={type === "password" ? (isVisible ? "text" : "password") : type}
            className="w-full bg-[#2b2f33] rounded-xl px-4 py-3 text-[#ecf0f1] outline-none transition-all duration-200 placeholder:text-[#7f8c8d] focus:bg-[#33383d] focus:shadow-[0_0_0_2px_#3498db]"/>
    )
}