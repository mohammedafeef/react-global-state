import { useDeleteTodo } from "../../store/todo/reducers"
import { ToDoItemProps } from "./types";

export const useController = (props:ToDoItemProps) => {
    const removeTodo = useDeleteTodo();

    const handleRemoveTodo = () => {
        removeTodo(props.id);
    }
    return {
        actions:{
            handleRemoveTodo
        }
    }
}