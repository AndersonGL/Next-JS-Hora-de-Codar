"use client";

import { useSession } from "next-auth/react";

export default function ClientPage() {
  const { data: session } = useSession();

  if (!session?.user) {
    return (
      <main className="flex min-h-screen items-center justify-center p-8">
        <p>Voce precisa estar autenticado.</p>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen items-center justify-center p-8">
      <h1>Componente client carregado com sucesso.</h1>
    </main>
  );
}
