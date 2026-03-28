
export default function Home() {

  // ✅ console.log — aparece no terminal do npm run dev
  console.log("Olá do servidor!")
  console.log("Dados de exemplo:", { nome: "Anderson", idade: 25 })

  // 🔴 BREAKPOINT — coloque um ponto vermelho clicando na margem esquerda do VS Code
  //    e use F5 para iniciar o debug, F10 para avançar linha por linha
  const titulo = "Hello World Next.js"
  const subtitulo = "Welcome to your Next.js application!"
  console.log("titulo:", titulo)
  console.log("subtitulo:",subtitulo)

  return (
    <main className="flex min-h-screen items-center justify-center bg-white dark:bg-black">
      <div>
        <h>{titulo}</h>
        <p>{subtitulo}</p>
      </div>
    </main>
  );
};
