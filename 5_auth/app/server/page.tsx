import { auth } from "auth";

const ServerPage = async () => {
  const session = await auth();

  if (!session || !session.user) {
    return <div>Voce precisa estar autenticado! Server</div>;
  }

  return <div>Bem-vindo ao server page !</div>;
};

export default ServerPage;