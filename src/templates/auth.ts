/**
 * NovaStack — Better Auth Templates
 *
 * Generators for the Better Auth server instance and client.
 * @see https://www.better-auth.com/docs
 */

export function generateAuthServer(): string {
  return `/**
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
`;
}

export function generateAuthClient(): string {
  return `/**
 * Better Auth — Client
 *
 * Use this in client components to access auth state and actions:
 *
 *   import { authClient } from "@/lib/auth-client";
 *
 *   // Sign up
 *   await authClient.signUp.email({ email, password, name });
 *
 *   // Sign in
 *   await authClient.signIn.email({ email, password });
 *
 *   // Get session
 *   const session = await authClient.getSession();
 *
 *   // Sign out
 *   await authClient.signOut();
 *
 * @see https://www.better-auth.com/docs/client
 */
import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  // Base URL defaults to the current origin in the browser.
  // Set explicitly if your API is on a different domain:
  // baseURL: process.env.NEXT_PUBLIC_APP_URL,
});

// Export commonly used hooks for convenience
export const {
  signIn,
  signUp,
  signOut,
  useSession,
} = authClient;
`;
}
