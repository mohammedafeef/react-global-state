import { useContext } from "react"
import { todoContext } from "./context"
import { Actions } from "./actions";

export const useCreateTodo = () => {
    const {dispatch} = useContext(todoContext);

    return (todo:ToDo) => dispatch({
        type:Actions.createTodo,
        payload:{
            data:todo
        }
    })
}

export const useDeleteTodo = ()=> {
    const {dispatch} = useContext(todoContext);

    return (id:string) => dispatch({
        type:Actions.deleteTodo,
        payload:{
            id
        }
    })
}