/**
 * Database Seed Script
 *
 * Populates the database with initial data for development.
 * Run with: npm run db:seed
 *
 * @see https://www.prisma.io/docs/guides/database/seed-database
 */
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding database...");

  // Add your seed data here.
  // Example:
  //
  // await prisma.user.create({
  //   data: {
  //     name: "Test User",
  //     email: "test@example.com",
  //     emailVerified: true,
  //   },
  // });

  console.log("✅ Seeding complete.");
}

main()
  .catch((e) => {
    console.error("❌ Seeding failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
