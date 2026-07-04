/**
 * Better Auth — Server Instance
 *
 * This is the core auth configuration. It uses the Prisma adapter
 * to store users, sessions, and accounts in your PostgreSQL database.
 *
 * Add plugins, OAuth providers, and custom logic here.
 *
 * @see https://www.better-auth.com/docs/installation
 * @see https://www.better-auth.com/docs/adapters/prisma
 */
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),

  // Email + Password authentication (enabled by default)
  emailAndPassword: {
    enabled: true,
  },

  // Add OAuth providers here:
  // socialProviders: {
  //   github: {
  //     clientId: process.env.GITHUB_CLIENT_ID!,
  //     clientSecret: process.env.GITHUB_CLIENT_SECRET!,
  //   },
  //   google: {
  //     clientId: process.env.GOOGLE_CLIENT_ID!,
  //     clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
  //   },
  // },
});
