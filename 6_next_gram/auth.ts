// Primeira coisa, vamos importar o NextAuth e os provedores 
// de autenticação que queremos usar. Neste exemplo,
//  usaremos o Google como provedor de autenticação.

import type { NextAuthConfig } from "next-auth";
import NextAuth from "next-auth";

import google from "next-auth/providers/google";

import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "./prisma/client";


const prismaAdapter = PrismaAdapter(prisma);


const config = {
  adapter: prismaAdapter,
  session: {
    strategy: "jwt",
  },
  providers: [google],
  pages: {
    signIn: "/signIn",
  },
  callbacks: {
    // 1. O callback jwt é chamado antes do session. Você pode usar para adicionar dados do usuário ao token
    jwt({ token, user }) {
      if (user) {
        token.sub = user.id;
      }
      return token;
    },
    // 2. Transfere os atributos do token para a sua sessão do lado do cliente
    session({ session, token }) {
      if (token.sub) {
        session.user.userID = token.sub; // Mudado para userID para combinar com seu next-auth.d.ts
      }
      return session;
    },
    // 3. (Opcional) Autenticação de rotas no Middleware
    /*
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const ehRotaProtegida = nextUrl.pathname.startsWith("/dashboard");

      if (ehRotaProtegida) {
        if (isLoggedIn) return true;
        return false; // Redireciona usuários não logados para a página de login
      }
      return true;
    },
    */
  },
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(config);  


// Provider = minha página

interface ProviderWithId {

    id: string;
    name: string;
}

// Mapear os Provider 

// Podemos agora acessar os providers da nossa página de login 

export const providerMap = config.providers.map((provider) => {
const typedProvider = provider as unknown  as ProviderWithId;
return {id: typedProvider.id, name: typedProvider.name};
});
