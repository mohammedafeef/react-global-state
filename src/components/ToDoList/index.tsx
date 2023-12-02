import { ToDoItem } from "../ToDoItem"

export const ToDoList = () => {
    return (
        <div className="w-1/2 max-w-[300px] flex flex-col gap-y-2 pt-4">
            <ToDoItem label="Learn React" id="1" />
            <ToDoItem label="Learn Vue" id="2" />
            <ToDoItem label="Learn Angular" id="3" />
        </div>
    )
}