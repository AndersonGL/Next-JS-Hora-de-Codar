"use client"

import Link from "next/link"
import { use } from "react";

const 
    TodoEditErrorPage = () => {
  return (
    <div>Ocorreu um problema ao editar a tarefa. tente novamente mais tarde.
    <Link href="/"> Voltar para home!</Link>
    </div>
  )
}

export default  TodoEditErrorPage;

