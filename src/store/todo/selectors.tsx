import { useContext } from "react"
import { todoContext } from "./context"

export const useTodo = () => {
    const {state} = useContext(todoContext);

    return state;
}