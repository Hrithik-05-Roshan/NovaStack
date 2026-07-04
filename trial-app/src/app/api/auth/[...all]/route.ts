/**
 * Better Auth — Catch-All API Route
 *
 * Handles all authentication requests:
 * - POST /api/auth/sign-in
 * - POST /api/auth/sign-up
 * - POST /api/auth/sign-out
 * - GET  /api/auth/session
 * - etc.
 *
 * @see https://www.better-auth.com/docs/integrations/next
 */
import { auth } from "@/lib/auth";
import { toNextJsHandler } from "better-auth/next-js";

export const { GET, POST } = toNextJsHandler(auth);
