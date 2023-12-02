import { cn } from "../../libs/Cn";
import { ToDoItemProps } from "./types";
import { RxCross1 } from "react-icons/rx";

export const ToDoItem = (props:ToDoItemProps) => {
    return (
        <div className={cn("w-full gap-x-3 flex")}>
            <input value={props.label} readOnly className={cn("flex-1 py-1 px-3 bg-white/70 rounded-md text-xs border border-gray-300/40","focus:outline-none")}/>
            <button className={cn("text-black p-2 border border-gray-300/40 rounded-md bg-white","hover:enabled:scale-[1.01]","disabled:opacity-50")}>
            <RxCross1 />
            </button>
        </div>
    )
}