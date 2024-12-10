// src/redux/types.ts

export interface Todo {
  id: string;
  todo: string;
  description: string;
}

export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
