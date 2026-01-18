import { Badge } from "@/components/ui/badge";
import { CheckCircle2, ExternalLink, Layers, Terminal } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  SiNextdotjs,
  SiPrisma,
  SiReact,
  SiStripe,
  SiTailwindcss,
} from "react-icons/si";

export default function DocsIntroduction() {
  const stack = [
    {
      name: "Next.js",
      version: "16.1.1 (App Router)",
      icon: <SiNextdotjs className="text-white" />,
    },
    {
      name: "React",
      version: "19.2.3",
      icon: <SiReact className="text-sky-400" />,
    },
    {
      name: "Tailwind CSS",
      version: "v4 (Latest)",
      icon: <SiTailwindcss className="text-cyan-400" />,
    },
    {
      name: "Prisma",
      version: "7.2.0",
      icon: <SiPrisma className="text-indigo-400" />,
    },
    {
      name: "Auth.js",
      version: "v5 (Beta 30)",
      icon: (
        <div className="relative w-6 h-6">
          <Image
            src="/images/icons/auth-js.webp"
            alt="Auth.js"
            fill
            className="object-contain rounded-sm"
          />
        </div>
      ),
    },
    {
      name: "Stripe",
      version: "v20",
      icon: <SiStripe className="text-purple-500" />,
    },
  ];

  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge
            variant="outline"
            className="border-emerald-500/20 bg-emerald-500/10 text-emerald-500 rounded-full px-3"
          >
            v1.0 Stable
          </Badge>
          <span className="text-zinc-600 text-sm font-mono tracking-tighter">
            Released Jan 2026
          </span>
        </div>
        <h1 className="text-5xl font-bold tracking-tighter">
          Introduction <span className="text-zinc-800">.</span>
        </h1>
        <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed">
          Welcome to the **Evines** starter kit. A high-performance,
          developer-first SaaS boilerplate designed to get your product from
          idea to production in hours, not weeks.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {stack.map((item) => (
          <div
            key={item.name}
            className="p-5 rounded-2xl border border-zinc-900 bg-zinc-950/50 flex items-center gap-4 hover:border-zinc-800 transition-colors"
          >
            <div className="text-2xl shrink-0">{item.icon}</div>
            <div>
              <p className="text-sm font-bold text-zinc-200">{item.name}</p>
              <p className="text-[11px] font-mono text-zinc-500 tracking-tight">
                {item.version}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold tracking-tight flex items-center gap-2">
          <Layers className="w-5 h-5 text-zinc-500" />
          Template Core Principles
        </h2>
        <div className="grid gap-4">
          {[
            {
              title: "Strictly Typed",
              desc: "Every component and API route is fully typed with TypeScript 5 for maximum safety.",
            },
            {
              title: "Next-Gen CSS",
              desc: "Built with Tailwind CSS v4, utilizing the latest CSS variable-based engine.",
            },
            {
              title: "Edge Ready",
              desc: "Optimized for Vercel Edge functions and global database providers like Neon or Supabase.",
            },
          ].map((feature) => (
            <div
              key={feature.title}
              className="flex gap-4 p-4 rounded-xl hover:bg-zinc-900/30 transition-colors group"
            >
              <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm font-bold text-zinc-200">
                  {feature.title}
                </h3>
                <p className="text-sm text-zinc-500">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="p-8 rounded-3xl border border-dashed border-zinc-800 bg-zinc-950 flex flex-col items-center text-center space-y-4">
        <Terminal className="w-10 h-10 text-zinc-700" />
        <h3 className="text-lg font-bold tracking-tight text-zinc-200">
          Ready to build?
        </h3>
        <p className="text-sm text-zinc-500 max-w-xs">
          Follow the step-by-step setup guide to connect your database and start
          developing.
        </p>
        <div className="flex gap-3 pt-2">
          <Link
            href="/docs/getting-started"
            className="bg-white text-black text-sm font-bold px-6 py-2.5 rounded-xl hover:bg-zinc-200 transition-colors"
          >
            Start Setup
          </Link>
          <a
            href="https://bloomtpl.com"
            target="_blank"
            className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white px-6 py-2.5 transition-colors"
          >
            Bloomtpl <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
}
