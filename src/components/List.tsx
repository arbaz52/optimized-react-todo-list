import React from "react";

import Item from "./Item";
import useTodos from "../useTodos";

const List: React.FC = () => {
  console.debug("render: List");
  const todosIds = useTodos((state) => state.sortedTodosIds);
  return (
    <ul>
      {todosIds.map((todoId) => (
        <Item id={todoId} key={todoId} />
      ))}
    </ul>
  );
};

export default List;
