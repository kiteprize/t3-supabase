import { PrismaClient } from "@prisma/client";
import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import Passkey from "next-auth/providers/passkey";

const prisma = new PrismaClient();

export const { auth, handlers, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [Passkey],
  experimental: { enableWebAuthn: true },
});
