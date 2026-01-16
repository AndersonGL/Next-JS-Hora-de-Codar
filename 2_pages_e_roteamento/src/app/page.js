import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-24">
       {/* Aula 1  */}
     <h1 className="text-3xl font-bold">Home</h1>
      <Link 
        href="/sobre"
        className="text-blue-600 hover:underline"
      >
        Sobre
      </Link>
      
         {/* Aula 2  */}

        <h1 className="text-3xl font-bold">Home com Posts</h1>
      <Link 
        href="/posts"
        className="text-blue-600 hover:underline"
      >
        Posts
      </Link>

        {/* Aula 3 - parâmetros na url */}

        <Link href="/exemplo?parametro=abc">Página com parâmetro</Link>

    </main>
  );
}
