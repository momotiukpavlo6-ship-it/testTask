export interface SharedProps{
    isVisible:boolean
    toggleVisibility?:()=>void
    type?: "text" | "password" | "number";
    value?:string
    setValue?:(value:string)=>void
}