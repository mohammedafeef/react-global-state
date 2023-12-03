import { Dispatch, ReactNode } from "react";
import { Actions } from "./actions"

export interface TodoContext {
    state: ToDo[],
    dispatch: Dispatch<TodoAction>;
}

export type TodoProviderProps = {
    children:ReactNode;
}

export type TodoAction = {
    type:Actions,
    payload:{
        id?:string;
        data?:ToDo;
    }
}