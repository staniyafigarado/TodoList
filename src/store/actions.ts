
import { Todo, ADD_TODO, REMOVE_TODO } from './type';

// Action to add a new todo
export const addTodo = (todo: string, description: string) => {
  return {
    type: ADD_TODO,
    payload: { todo, description },
  };
};

// Action to remove a todo by ID
export const removeTodo = (id: string) => {
  return {
    type: REMOVE_TODO,
    payload: id,
  };
};

