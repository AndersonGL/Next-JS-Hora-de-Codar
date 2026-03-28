// user => rede social + ID

import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      userID: string | undefined;
    } & DefaultSession["user"];
  }
}
