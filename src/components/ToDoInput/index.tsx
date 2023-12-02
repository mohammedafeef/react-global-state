import { useController } from "./useController";
import { MdFormatListBulletedAdd } from "react-icons/md";

export const ToDoInput = () => {
    const {values,actions} = useController();
    return (
        <div className="w-1/2 max-w-[300px] gap-x-3 flex">
            <input type="text" placeholder="Enter your todo" value={values.toDo} onChange={actions.handleToDoChange} className="flex-1 py-1 px-3 bg-white rounded-md focus:outline-none text-xs border border-gray-300/40"/>
            <button disabled={!values.toDo} className="text-black p-2 border border-gray-300/40 rounded-md bg-white disabled:opacity-50">
            <MdFormatListBulletedAdd />
            </button>
        </div>
    )
}