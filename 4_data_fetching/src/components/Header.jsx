import React from 'react'

const Header = () => {
  return (
    <header className="bg-blue-500 text-white p-4">
    <nav className="container mx-auto flex justify-between">
      <h1 className="text-2xl font-bold">Todos!</h1>
      <Link href="/">Lista de tarefas</Link>
      <Link href="/todos/create">Criar tarefa</Link>
    </nav>
    </header>
  )
}

export default Header