import React from "react";
import useTodos from "../useTodos";

const Form: React.FC = () => {
  const addTodo = useTodos((state) => state.addTodo);
  const formRef = React.useRef<HTMLFormElement>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleSubmit = React.useCallback(
    (ev: React.FormEvent<HTMLFormElement>) => {
      ev.preventDefault();
      addTodo(inputRef.current?.value || "");
      formRef.current?.reset();
    },
    [addTodo]
  );
  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <input type="text" ref={inputRef} />
      <button type="submit">+ item</button>
    </form>
  );
};

export default Form;
