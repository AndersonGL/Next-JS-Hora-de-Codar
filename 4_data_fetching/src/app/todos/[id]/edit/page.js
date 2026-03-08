import React from "react";
import { findTodoById } from "@/action";
import { notFound } from "next/navigation";
import TodoForm from "@/components/TodoForm";

const TodoEdit = async ({ params }) => {
  const resolvedParams = await params;
  const id = BigInt(resolvedParams.id);
  const todo = await findTodoById(id);

  if (!todo) {
    notFound();
  }

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold text-center mb-6">Editando: {todo.titulo}</h1>
      <TodoForm todo={todo} />
    </div>
  );
};

export default TodoEdit;

