import {SlideBarMenu} from "@/app/stories/SlideBarMenu";
import {Inputs} from "@/app/stories/Inputs.stories";
import {Toasts} from "@/app/stories/Toasts.stories";

export default function Home() {
    return (
        <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-[#1a1c1f] to-[#111214] p-10">
                <SlideBarMenu/>
                <Inputs/>
                <Toasts/>
        </div>
    );
}
