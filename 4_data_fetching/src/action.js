"use server";

import db from "./db.js";
import { redirect } from "next/navigation";

export async function addTodo(formData) {
    const titulo = formData.get("titulo");
    const descricao = formData.get("descricao");

    await db.todo.create({
        data: {
            titulo,
            descricao,
        },
    });

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


    // tratamento de erros




    if (titulo.length <5) {
        return { errors: "O titulo deve conter no minimo 5 caracteres." };
    }

    if (!titulo) {
        return { errors: "O titulo e obrigatorio." };
    }

    if (descricao.length < 10) {
        return { errors: "A descrição deve conter no minimo 10 caracteres." };
    }   

    await db.todo.update({
        where: { id },
        data: { titulo, descricao },
    });

    redirect("/");

}