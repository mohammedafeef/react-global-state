import { TodoProvider } from "./todo";
import { ContextProviderProps } from "./types";

export const ContextProvider = (props:ContextProviderProps) => {
    return (
        <TodoProvider>
            {props.children}
        </TodoProvider>
    )
}