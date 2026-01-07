import Link from "next/link";

const Sobrepage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-24">
    
      <h1 className="text-3xl font-bold">Página de Sobre </h1>

      <Link 
        href="/"
        className="text-blue-600 hover:underline"
      >
       Ir para Home
      </Link>
  
    </main>
  );
};

export default Sobrepage;


