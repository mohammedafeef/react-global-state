import { ToDoItem } from "../ToDoItem"
import { useController } from "./useController"

export const ToDoList = () => {
    const {values} = useController();
    return (
        <div className="w-1/2 max-w-[300px] flex flex-col gap-y-2 pt-4">
            {
                values.toDos.map((todo) => <ToDoItem key={todo.id} label={todo.label} id={todo.id} />)
            }
        </div>
    )
}