/**
 * NovaStack — Prisma Templates
 *
 * Generators for Prisma schema and seed file.
 * Schema includes User, Session, Account, and Verification models
 * required by Better Auth.
 */

export function generatePrismaSchema(): string {
  return `// Prisma Schema
// 
// This schema defines your database models.
// The User, Session, Account, and Verification models are required by Better Auth.
//
// After modifying this file, run:
//   npx prisma db push    — to sync changes to your database
//   npx prisma generate   — to regenerate the Prisma Client
//
// @see https://www.prisma.io/docs/concepts/components/prisma-schema
// @see https://www.better-auth.com/docs/adapters/prisma

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

// ── Better Auth Required Models ─────────────────────────────────

model User {
  id            String    @id @default(cuid())
  name          String
  email         String    @unique
  emailVerified Boolean   @default(false)
  image         String?
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt

  sessions      Session[]
  accounts      Account[]

  @@map("user")
}

model Session {
  id        String   @id @default(cuid())
  expiresAt DateTime
  token     String   @unique
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  ipAddress String?
  userAgent String?

  userId String
  user   User   @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@map("session")
}

model Account {
  id                    String    @id @default(cuid())
  accountId             String
  providerId            String
  userId                String
  user                  User      @relation(fields: [userId], references: [id], onDelete: Cascade)
  accessToken           String?
  refreshToken          String?
  idToken               String?
  accessTokenExpiresAt  DateTime?
  refreshTokenExpiresAt DateTime?
  scope                 String?
  password              String?
  createdAt             DateTime  @default(now())
  updatedAt             DateTime  @updatedAt

  @@map("account")
}

model Verification {
  id         String   @id @default(cuid())
  identifier String
  value      String
  expiresAt  DateTime
  createdAt  DateTime @default(now())
  updatedAt  DateTime @updatedAt

  @@map("verification")
}

// ── Your Application Models ─────────────────────────────────────
// Add your own models below this line.
`;
}

export function generatePrismaSeed(): string {
  return `/**
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
`;
}
