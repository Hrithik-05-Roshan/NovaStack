"use client";

export default function TrustedTech() {
  const TECHS = [
    { name: "Next.js", url: "https://nextjs.org" },
    { name: "TypeScript", url: "https://typescriptlang.org" },
    { name: "Prisma", url: "https://prisma.io" },
    { name: "PostgreSQL", url: "https://postgresql.org" },
    { name: "Tailwind CSS", url: "https://tailwindcss.com" },
    { name: "Better Auth", url: "https://better-auth.com" },
    { name: "Docker", url: "https://docker.com" },
  ];

  return (
    <div className="w-full py-8 border-y border-border-custom bg-black/10 select-none">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center gap-4">
        <span className="text-[10px] uppercase font-mono tracking-wider text-zinc-500">
          Core Engine Foundations
        </span>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          {TECHS.map((tech) => (
            <a
              key={tech.name}
              href={tech.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono font-bold tracking-tight text-zinc-500 hover:text-primary-text transition-colors duration-200"
            >
              {tech.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
