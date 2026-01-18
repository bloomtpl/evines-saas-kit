"use client";

import Image from "next/image";
import { IconType } from "react-icons";
import {
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiStripe,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

interface Technology {
  name: string;
  desc: string;
  icon?: IconType;
  image?: string;
}

const technologies: Technology[] = [
  { name: "Next.js 16", icon: SiNextdotjs, desc: "App Router & RSC" },
  { name: "Tailwind 4.0", icon: SiTailwindcss, desc: "Modern Styling" },
  { name: "Stripe", icon: SiStripe, desc: "Global Billing" },
  { name: "TypeScript", icon: SiTypescript, desc: "Type-safe Code" },
  { name: "Prisma", icon: SiPrisma, desc: "Modern ORM" },
  { name: "PostgreSQL", icon: SiPostgresql, desc: "Reliable Database" },
  { name: "Vercel", icon: SiVercel, desc: "Edge Deployment" },
  {
    name: "Auth.js",
    image: "/images/icons/auth-js.webp",
    desc: "Secure Identity",
  },
];

export default function Stack() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-20 space-y-4">
          <div className="flex items-center justify-center gap-2 text-zinc-500 font-mono text-[10px] tracking-[0.3em] uppercase">
            <span className="w-8 h-[1px] bg-zinc-800" />
            The Engine
            <span className="w-8 h-[1px] bg-zinc-800" />
          </div>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter italic">
            Powered by the{" "}
            <span className="text-zinc-700 font-medium NOT-italic">best.</span>
          </h2>
          <p className="text-zinc-500 max-w-xl text-sm md:text-base leading-relaxed font-medium">
            No legacy code. No bloat. Only the most performant tools in the
            ecosystem to ensure your SaaS stays fast and maintainable.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {technologies.map((tech) => {
            const Icon = tech.icon;

            return (
              <div
                key={tech.name}
                className="group relative p-8 rounded-2xl border border-zinc-900 hover:bg-zinc-900/50 transition-all duration-300"
              >
                <div className="flex flex-col items-center gap-4 text-center">
                  {tech.image ? (
                    <div className="w-10 h-10 relative grayscale group-hover:whitescale transition-all duration-300">
                      <Image
                        src={tech.image}
                        alt={tech.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                  ) : (
                    Icon && (
                      <Icon className="w-10 h-10 text-zinc-600 group-hover:text-white transition-colors duration-300" />
                    )
                  )}

                  <div>
                    <h3 className="font-bold text-sm text-zinc-200">
                      {tech.name}
                    </h3>
                    <p className="text-[10px] text-zinc-600 font-mono mt-1 uppercase tracking-wider">
                      {tech.desc}
                    </p>
                  </div>
                </div>

                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>
            );
          })}
        </div>

        <div className="mt-16 flex justify-center">
          <div className="px-6 py-2 rounded-full border border-zinc-900 bg-black flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs text-zinc-500 font-medium tracking-tight italic">
              100% Type-safe architecture throughout the entire stack
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
