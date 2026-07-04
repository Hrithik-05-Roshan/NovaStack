/**
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
