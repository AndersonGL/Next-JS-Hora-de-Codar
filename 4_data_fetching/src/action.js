"user server"

import { db } from "./db.js";
import { redirect } from "next/navigation";


 export async function deleteTodo (formData) {
    
    const id = parseInt(formData.get("id"));

    await db.todo.delete({
      where: { id }
    });

    redirect("/"); // Redireciona para a página inicial após a exclusão
  }