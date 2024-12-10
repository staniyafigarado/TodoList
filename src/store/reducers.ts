
import { Todo, ADD_TODO, REMOVE_TODO } from './type';

interface Action {
  type: string;
  payload: any;
}

const initialState: Todo[] = [];

const todoReducer = (state = initialState, action: Action): Todo[] => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: Date.now().toString(), 
          todo: action.payload.todo,
          description: action.payload.description,
        },
      ];
    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
};

export default todoReducer;
