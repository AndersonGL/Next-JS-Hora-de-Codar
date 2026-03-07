import React from 'react'


const TodoEdit = ({params}) => {

    const id = Number(params.id);

    const todo =  findTodoById(id);

  return (
    <div>   
          <h1> 
            Ediatando:  {todo.titulo}</h1>

    </div>;
  )
}   

export default TodoEdit;