import db from "@/db";  // importando o banco de dados
import { redirect } from "next/navigation";

// 1- Criação de um formulário
const TodoPage = () => {

  // Formdate - useState
  // 2 - Inserção de dados no banco de dados
  const addTodo = async (formData) => {
    "use server"
    console.log(formData)

    const titulo = formData.get("titulo")
    const descricao = formData.get("descricao")

    console.log(titulo, descricao);


    // validação

    const todo = await db.todo.create({
      data: {
        titulo,
        descricao,
      },
    });

    console.log(todo)

    redirect("/")
  };


  return (
    <div className='max-w-md mx-auto mt-10'>
      <h1 className='text-2xl font-bold text-center mb-6'>Criar nova tarefa</h1>
      <form action={addTodo} className='flex flex-col gap-4 p-4 bg-white shadow-lg rounded-lg'>
        <label htmlFor="titulo" className="block text-sm font-medium text-gray-700">
          Titulo
          <input type="text" id="titulo" name="titulo"
            className='mt-1 px-4 py-2 border border-gray-300 rounded-md w-full' placeholder='insira o título' required />
        </label>
        <label htmlFor="descricao" className="block text-sm font-medium text-gray-700">
          Descrição
          <textarea
            id="descricao"
            name="descricao"
            placeholder='Descrição a tarefa'
            className='mt-1 px-4 py-2 border border-gray-300 rounded-md w-full h-32' required>
          </textarea>
        </label>
        <button type='submit' className='bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600'>Criar Todo</button>

      </form>
    </div>
  )
}

export default TodoPage;