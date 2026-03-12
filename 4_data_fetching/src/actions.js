"use server";

import db from "./db.js";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export async function addTodo(_formState, formData) {
  const titulo = formData.get("titulo")?.toString().trim() ?? "";
  const descricao = formData.get("descricao")?.toString().trim() ?? "";

  if (!titulo) {
    return {
      errors: "O titulo e obrigatorio.",
      fields: { titulo, descricao },
    };
  }

  if (titulo.length < 5) {
    return {
      errors: "O titulo deve conter no minimo 5 caracteres.",
      fields: { titulo, descricao },
    };
  }

  if (descricao.length < 10) {
    return {
      errors: "A descricao deve conter no minimo 10 caracteres.",
      fields: { titulo, descricao },
    };
  }

  try {
    await db.todo.create({
      data: {
        titulo,
        descricao,
        status: "pendente",
      },
    });
  } catch {
    return {
      errors: "Ocorreu um erro ao criar a tarefa. Tente novamente.",
      fields: { titulo, descricao },
    };
  }

  revalidatePath("/");
  redirect("/");
}

export async function deleteTodo(formData) {
  const id = BigInt(formData.get("id"));

  await db.todo.delete({
    where: { id },
  });

  revalidatePath("/");
  redirect("/");
}

export async function findTodoById(id) {
  const todo = await db.todo.findUnique({
    where: { id },
  });

  return todo;
}

export const updateTodo = async (_formState, formData) => {
  const titulo = formData.get("titulo")?.toString().trim() ?? "";
  const descricao = formData.get("descricao")?.toString().trim() ?? "";
  const id = BigInt(formData.get("id"));

  if (!titulo) {
    return {
      errors: "O titulo e obrigatorio.",
      fields: { titulo, descricao },
    };
  }

  if (titulo.length < 5) {
    return {
      errors: "O titulo deve conter no minimo 5 caracteres.",
      fields: { titulo, descricao },
    };
  }

  if (descricao.length < 10) {
    return {
      errors: "A descricao deve conter no minimo 10 caracteres.",
      fields: { titulo, descricao },
    };
  }

  try {
    await db.todo.update({
      where: { id },
      data: { titulo, descricao },
    });
  } catch {
    return {
      errors: "Ocorreu um erro ao atualizar a tarefa. Tente novamente.",
      fields: { titulo, descricao },
    };
  }

  revalidatePath("/");
  redirect("/");
};

export async function toggleTodoStatus(formData) {
  const id = BigInt(formData.get("id"));

  const todo = await db.todo.findUnique({
    where: { id },
  });

  if (!todo) {
    return;
  }

  const novoStatus = todo.status === "pendente" ? "concluida" : "pendente";

  console.log (TodoEdit, todo.status, novoStatus);

  await db.todo.update({
    where: { id },
    data: { status: novoStatus },
  });

  revalidatePath("/");
}


