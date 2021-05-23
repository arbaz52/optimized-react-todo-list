export interface ITodo {
  id: string;
  text: string;
  completed: boolean;
}

export interface ITodos {
  [id: string]: ITodo;
}

export interface IUseTodos {
  todos: ITodos;
  sortedTodosIds: string[];

  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
  toggleComplete: (id: string) => void;
  updateTodo: (id: string, todo: Partial<ITodo>) => void;
}
