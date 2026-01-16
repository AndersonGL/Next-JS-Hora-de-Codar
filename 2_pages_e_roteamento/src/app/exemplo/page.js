"use client";

// Usar comuse (hoook ) => ambiente de client


import { useSearchParams } from 'next/navigation';


const ExemploPage = () => {

    const searchParams = useSearchParams();

    // console.log(searchParams);

    const valorDoParametro = searchParams.get('parametro');

    const presencaDoParametro = searchParams.has('parametroa');

  return (
    <div>
        <h1>Página de Exemplo</h1>
        <p>O valor do parâmetro é: {valorDoParametro}</p>
        {presencaDoParametro ? "Tem parametro": "Não tem parâmetro"}
 
    </div>
  )
}

export default ExemploPage;
