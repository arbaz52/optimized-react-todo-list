import React, { useCallback } from "react";
import useTodos from "../useTodos";

export interface IItemProps {
  id: string;
}

const Item: React.FC<IItemProps> = ({ id }) => {
  console.debug(`render: Item ${id}`);
  const removeTodo = useTodos((state) => state.removeTodo);
  const toggleComplete = useTodos((state) => state.toggleComplete);
  const todo = useTodos(useCallback((state) => state.todos[id], [id]));

  const handleRemoveTodo = React.useCallback(() => removeTodo(id), [
    removeTodo,
    id
  ]);
  const handleOnClick = React.useCallback(() => toggleComplete(id), [
    id,
    toggleComplete
  ]);
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={handleOnClick}
      />
      {todo.text}
      <button onClick={handleRemoveTodo}>&#x292B;</button>
    </li>
  );
};

export default React.memo(Item);
