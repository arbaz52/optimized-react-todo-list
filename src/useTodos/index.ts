import create from "zustand";

import { v4 as uuid } from "uuid";

import { ITodo, IUseTodos } from "./types";

const useTodos = create<IUseTodos>((set) => ({
  todos: {},
  sortedTodosIds: [],
  addTodo: (title) => {
    const newTodo: ITodo = {
      text: title,
      id: uuid(),
      completed: false
    };
    set((pvState) => ({
      ...pvState,
      todos: { [newTodo.id]: newTodo, ...pvState.todos },
      sortedTodosIds: [newTodo.id, ...pvState.sortedTodosIds]
    }));
  },
  removeTodo: (id) => {
    set((pvState) => ({
      ...pvState,
      sortedTodosIds: pvState.sortedTodosIds.filter((todo) => todo !== id)
    }));
  },
  toggleComplete: (id) => {
    set((pvState) => ({
      ...pvState,
      todos: {
        ...pvState.todos,
        [id]: { ...pvState.todos[id], completed: !pvState.todos[id].completed }
      }
    }));
  },
  updateTodo: (id, updates) => {}
}));

export default useTodos;
