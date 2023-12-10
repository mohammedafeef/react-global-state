import { ChangeEvent, useState } from 'react';
import { useCreateTodo } from '../../store/todo/reducers';
import { v4 as uuid } from 'uuid';

export const useController = () => {
  const [toDo, setToDo] = useState('');
  const addTodo = useCreateTodo();

  const handleToDoChange = (event: ChangeEvent<HTMLInputElement>) => {
    setToDo(event.target.value);
  };
  const clearInput = () => setToDo('');
  const handleAddToDo = () => {
    if (!toDo) return;
    addTodo({
      id: uuid(),
      label: toDo,
    });
    clearInput();
  };
  return {
    values: {
      toDo,
    },
    actions: {
      handleToDoChange,
      handleAddToDo,
    },
  };
};
