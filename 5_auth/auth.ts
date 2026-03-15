// Primeira coisa, vamos importar o NextAuth e os provedores 
// de autenticação que queremos usar. Neste exemplo,
//  usaremos o Google como provedor de autenticação.

import type { NextAuthConfig } from "next-auth";
import NextAuth from "next-auth";

import google from "next-auth/providers/google";

const config = {
    providers: [google],

}satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(config);   