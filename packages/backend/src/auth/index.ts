import { ExpressAuth } from "@auth/express";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import Google from "@auth/express/providers/google";
import Discord from "@auth/express/providers/discord";
import Credentials from "@auth/express/providers/credentials";
import bcrypt from "bcrypt";
import { eq } from "drizzle-orm";
import { db } from "../db/index.js";
import { env } from "../config/env.js";
import * as schema from "../db/schema/index.js";

export const authHandler = ExpressAuth({
  secret: env.AUTH_SECRET,
  adapter: DrizzleAdapter(db, {
    usersTable: schema.accounts,
    accountsTable: schema.authProviders,
    sessionsTable: schema.sessions,
    verificationTokensTable: schema.verificationTokens,
  }),
  session: {
    strategy: "database",
  },
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        const email = credentials.email as string;
        const password = credentials.password as string;

        const user = await db.query.accounts.findFirst({
          where: eq(schema.accounts.email, email),
        });

        if (!user || !user.passwordHash) return null;

        const valid = await bcrypt.compare(password, user.passwordHash);
        if (!valid) return null;

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          image: user.image,
        };
      },
    }),
    ...(env.GOOGLE_CLIENT_ID
      ? [
          Google({
            clientId: env.GOOGLE_CLIENT_ID,
            clientSecret: env.GOOGLE_CLIENT_SECRET,
          }),
        ]
      : []),
    ...(env.DISCORD_CLIENT_ID
      ? [
          Discord({
            clientId: env.DISCORD_CLIENT_ID,
            clientSecret: env.DISCORD_CLIENT_SECRET,
          }),
        ]
      : []),
  ],
  callbacks: {
    async session({ session, user }) {
      if (session.user) {
        session.user.id = user.id;
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
});
