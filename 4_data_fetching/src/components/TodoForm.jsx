'use client';

import {useActionState} from 'react';
import {updateTodo} from '@/action';

const TodoForm = ({todo}) => {


const [formState, action] = useActionState(updateTodo, {errors: ""})

    return (

        <form action={action} className='flex flex-col gap-4 p-4 bg-white shadow-lg rounded-lg'>


        {formState?.errors ? <p className='text-red-500 text-sm'>{formState.errors}</p> : null}



            <input type="hidden" name="id" value={todo?.id?.toString?.() ?? ''} />
            <label htmlFor="titulo" className="block text-sm font-medium text-gray-700">
                Titulo
              l  <input type="text" id="titulo" name="titulo"
                    className='mt-1 px-4 py-2 border border-gray-300 rounded-md w-full' placeholder='insira o título' required 
                defaultValue={todo.titulo}    
                  
                    />
            </label>




            <label htmlFor="descricao" className="block text-sm font-medium text-gray-700">
               l  
               Descrição
               <input type="text" id="descricao" name="descricao"
                    className='mt-1 px-4 py-2 border border-gray-300 rounded-md w-full' placeholder='insira a descrição' required 
                defaultValue={todo.descricao}    

                    />
                <textarea

                    id="descricao"
                    name="descricao"
                    placeholder='Descrição a tarefa'
                    className='mt-1 px-4 py-2 border border-gray-300 rounded-md w-full h-32' required
                    defaultValue={todo.descricao}>
                </textarea>
            </label>
            <button type='submit' className='bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600'>Editar</button>

        </form>

    );
};

export default TodoForm;


