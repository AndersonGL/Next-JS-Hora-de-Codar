'use client';

import { useActionState } from 'react';
import { updateTodo } from '@/actions';

const TodoForm = ({ todo }) => {
    const [formState, action, isPending] = useActionState(updateTodo, {
        errors: '',
        fields: {
            titulo: todo?.titulo ?? '',
            descricao: todo?.descricao ?? '',
        },
    });

    return (
        <form action={action} className='flex flex-col gap-4 p-4 bg-white shadow-lg rounded-lg'>
            {formState?.errors ? <p className='text-red-500 text-sm'>{formState.errors}</p> : null}

            <input type='hidden' name='id' value={todo?.id?.toString?.() ?? ''} />

            <label htmlFor='titulo' className='block text-sm font-medium text-gray-700'>
                Titulo
                <input
                    type='text'
                    id='titulo'
                    name='titulo'
                    className='mt-1 px-4 py-2 border border-gray-300 rounded-md w-full'
                    placeholder='insira o título'
                    required
                    defaultValue={formState?.fields?.titulo ?? ''}
                />
            </label>

            <label htmlFor='descricao' className='block text-sm font-medium text-gray-700'>
                Descrição
                <textarea
                    id='descricao'
                    name='descricao'
                    placeholder='Descrição da tarefa'
                    className='mt-1 px-4 py-2 border border-gray-300 rounded-md w-full h-32'
                    required
                    defaultValue={formState?.fields?.descricao ?? ''}
                />
            </label>

            <button type='submit' disabled={isPending} className='bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 disabled:opacity-70'>
                {isPending ? 'Salvando...' : 'Salvar'}
            </button>
        </form>
    );
};


export default TodoForm;


