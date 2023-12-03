import {  useReducer } from "react";
import { TodoProviderProps } from "./types";
import { todoReducer } from "./reducer";
import { todoContext } from "./context";


export const TodoProvider = (props:TodoProviderProps) => {
    const [state,dispatch] = useReducer(todoReducer,[]);

    return (
        <todoContext.Provider value={{state,dispatch}}>
            {props.children}
        </todoContext.Provider>
    )
}