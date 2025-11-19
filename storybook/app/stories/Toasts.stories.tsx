import {Toast} from "@/app/components/Toast/Toast";

export const Toasts = () => {
    return(
        <div >
            <Toast time={5000} type="Success" message="Success Message"/>
            <Toast time={4000} type="Error" message="Error Message"/>
            <Toast time={3000} type="Warning" message="Warning Message"/>
            <Toast time={2000} type="Info" message="Info Message"/>
        </div>
    )
}