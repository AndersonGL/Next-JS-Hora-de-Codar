"use server";

import db from "./db.js";
import { redirect } from "next/navigation";

export async function addTodo(formState, formData) {
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
      },
    });
  } catch {
    return {
      errors: "Ocorreu um erro ao criar a tarefa. Tente novamente.",
      fields: { titulo, descricao },
    };
  }

  redirect("/");
}


export async function deleteTodo(formData) {
   const id = BigInt(formData.get("id"));

    await db.todo.delete({
      where: { id }
    });

    redirect("/"); // Redireciona para a página inicial após a exclusão
}

export async function findTodoById(id) {
    const todo = await db.todo.findUnique({
        where: { id }
    });

    return todo;
}

export const updateTodo = async(formState, formData) => {
  
    const titulo = formData.get("titulo")?.toString().trim() ?? "";
    const descricao = formData.get("descricao")?.toString().trim() ?? "";
    const id = BigInt(formData.get("id"));

   try {

     if (!titulo) {
      return {
        errors: "O titulo e obrigatorio.",
        fields: { titulo, descricao },
      };
    }

    if (titulo.length <5) {
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

    redirect("/"); // Redireciona para a página inicial após a atualização
   } catch {
    return {
      errors: "Ocorreu um erro ao atualizar a tarefa. Tente novamente.",
      fields: { titulo, descricao },
    };
   }
};











  
  
  
  
  
  
  
