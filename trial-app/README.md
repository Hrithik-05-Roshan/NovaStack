# Trial App

> Generated with [NovaStack](https://github.com/novastack/novastack) — Build production-ready applications in minutes, not hours.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15 |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Database | PostgreSQL |
| ORM | Prisma |
| Auth | Better Auth |
| UI | shadcn/ui |
| Linting | ESLint + Prettier |
| Container | Docker |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) >= 18.0.0
- [Docker](https://www.docker.com/) (for PostgreSQL)

### Setup

```bash
# 1. Install dependencies
npm install

# 2. Set up environment variables
cp .env.example .env.local

# 3. Start PostgreSQL
docker compose up -d

# 4. Push database schema
npx prisma db push

# 5. Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your application.

## Project Structure

```
├── prisma/              # Database schema & seed
├── public/              # Static assets
├── src/
│   ├── app/             # Next.js App Router (pages & API routes)
│   ├── components/      # React components
│   │   └── ui/          # shadcn/ui components
│   ├── lib/             # Utilities (auth, db, helpers)
│   └── types/           # TypeScript type definitions
├── .env.example         # Environment variable template
├── Dockerfile           # Production container
└── docker-compose.yml   # Development database
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run format` | Format code with Prettier |
| `npm run db:push` | Push schema to database |
| `npm run db:studio` | Open Prisma Studio |
| `npm run db:seed` | Seed the database |

## Adding UI Components

This project is configured for [shadcn/ui](https://ui.shadcn.com/). Add components with:

```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add input
```

## Deployment

This project includes a production-ready `Dockerfile` with multi-stage builds.

```bash
# Build the Docker image
docker build -t trial-app .

# Run the container
docker run -p 3000:3000 trial-app
```

## License

MIT
