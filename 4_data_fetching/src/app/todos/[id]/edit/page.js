import React from "react";
import { findTodoById } from "@/action";
import { REACT_LOADABLE_MANIFEST } from "next/dist/shared/lib/constants";
import TodoForm from "@/components/TodoForm";

const TodoEdit = async ({ params }) => {
  const resolvedParams = await params;
  const id = BigInt(resolvedParams.id);
  const todo = await findTodoById(id);

  return (
    <div>
      <h1>Editando: {todo?.titulo}</h1>
      <TodoForm todo={todo} />
    </div>
  );
};

export default TodoEdit;

