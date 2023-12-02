import { ChangeEvent, useState } from "react";

export const useController = () => {
    const [toDo,setToDo] = useState("");

    const handleToDoChange = (event:ChangeEvent<HTMLInputElement>) => {
        setToDo(event.target.value);
    }
    const handleAddToDo = () => {
        
    }
    return {
        values:{
            toDo,
        },
        actions:{
            handleToDoChange,
            handleAddToDo
        }
    }
}