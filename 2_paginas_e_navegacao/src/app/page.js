import Link from "next/link";
import BotaoRedirect from "@/components/BotaoRedirect";

export default function Home() {
  return (
    <main>
      <section>
        {/* 1 - Criando e navegando entre páginas */}
        <h1>Aula 1</h1>
        <h2>Página Inicial</h2>
        <Link href="/sobre">Ir para a página Sobre</Link>
      </section>
      <section>
        {/* 2 - Páginas Dinâmicas */}
        <h1>Aula 2</h1>
        <Link href="/posts">Ir para a página Posts</Link>
      </section>
      <section>
        {/* 3 - Rotas com Parâmetros */}
        <h1>Aula 3</h1>
        <Link href="/exemplo?parametro=valor">
          Abrir a Página de Exemplo com Parâmetro
        </Link>
      </section>
      <section>
        {/* 4 - Nested routes */}
        <h1>Aula 4</h1>
        <Link href="/produtos/roupas">Ir para categoria de Roupas</Link>
      </section>
      <section>
        {/* 7 - Nested layout */}
        <h1>Aula 7</h1>
        <Link href="/dashboard">Ir para dashboard</Link>
      </section>
      <section>
        {/* 8 - useRouter */}
        <h1>Aula 8</h1>
        <BotaoRedirect />
      </section>
      <section>
        {/* 9 - redirect */}
        <h1>Aula 9</h1>
        <Link href="/profile">Ir para Perfil</Link>
      </section>
    </main>
  );
}
