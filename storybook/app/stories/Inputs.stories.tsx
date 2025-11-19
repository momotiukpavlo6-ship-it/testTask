import { Input } from "../components/Input/Input";

export const Inputs = () => {
    return(
        <div className="flex flex-col gap-5">
            <Input type="password" clearable={true}/>
            <Input type="password"/>
            <Input type="text" clearable={true}/>
            <Input type="text" />
            <Input type="number" clearable={true}/>
            <Input type="number"/>
        </div>
    )
}