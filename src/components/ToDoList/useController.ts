import { useTodo } from "../../store/todo/selectors"

export const useController = () => {
    const toDos = useTodo();

    return {
        values:{
            toDos
        }
    }
}