import db from "@/db";
import { redirect } from "next/navigation";
import Link from "next/link";

async function handleDelete(id) {
  "use server";
  await db.todo.delete({
    where: { id }
  });
}

export default async function Home() {

  // 3 - Resgate de dados do banco de dados
  const todos = await db.todo.findMany();


  // 4 - Excluao de dados do banco de dados

  async function deleteTodo (formData) {
    "use server";
    const id = parseInt(formData.get("id"));

    await db.todo.delete({
      where: { id }
    });

    redirect("/"); // Redireciona para a página inicial após a exclusão
  }

  return (

    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Todos!</h1>
      <div className="space-y-4">
        {todos.map((todo) => (
          <div key={todo.id} className="bg-gray-100 p-4 rounded-lg shadow">
            <div className="flex justify-between items-start">
              <div className="p-4">
                <h2 className="text-lg font-semibold">{todo.titulo}</h2>
                <p className="text-gray-600">{todo.descricao}</p>
              </div>
              <div className="flex space-x-2 mt-3">
                <Link href={`/todos/${todo.id}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Visualizar</Link>
                 <Link href={`/todos/${todo.id}/edit`}className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Editar</Link>
                < form action={deleteTodo}>
                  <input type="hidden" name="id" value={todo.id} />
                  <button type="submit" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Excluir</button>
                </form>
              </div>
            </div>  
          </div> 
        ))}
      </div>
    </main>
  );
}
