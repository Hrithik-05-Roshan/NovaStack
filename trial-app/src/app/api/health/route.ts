/**
 * Health Check API Route
 *
 * Returns the application status. Useful for:
 * - Docker health checks
 * - Load balancer probes
 * - Uptime monitoring
 */
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    {
      status: "ok",
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
    },
    { status: 200 }
  );
}
