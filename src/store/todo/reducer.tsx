import { Actions } from "./actions";
import { TodoAction } from "./types";

export const todoReducer = (states:ToDo[],actions:TodoAction):ToDo[] => {
    switch(actions.type){
        case Actions.createTodo:
            return actions.payload.data?(
                [
                    ...states,
                   actions.payload.data,
                ]
            ):states;
        case Actions.updateTodo:
            return states.filter((todo)=> todo.id !== actions.payload.id);
        case Actions.deleteTodo:
            return actions.payload.id?states.filter((todo)=> todo.id !== actions.payload.id):states;
        default:
            return states;
    }
}