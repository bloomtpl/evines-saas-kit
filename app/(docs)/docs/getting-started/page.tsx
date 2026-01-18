import {
  ArrowRight,
  Copy,
  Download,
  Globe,
  Laptop,
  Terminal,
} from "lucide-react";
import Link from "next/link";

export default function GettingStarted() {
  const steps = [
    {
      title: "Prerequisites",
      desc: "Ensure you have Node.js 20+ and npm/pnpm installed on your machine.",
      icon: <Laptop className="w-5 h-5" />,
    },
    {
      title: "Clone & Install",
      desc: "Extract your Bloomtpl download and install the project dependencies.",
      icon: <Download className="w-5 h-5" />,
    },
    {
      title: "Environment Setup",
      desc: "Configure your .env file with your database and provider credentials.",
      icon: <Globe className="w-5 h-5" />,
    },
  ];

  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <h1 className="text-5xl font-bold tracking-tighter italic">
          Getting Started{" "}
          <span className="text-zinc-800 NOT-italic text-2xl">.</span>
        </h1>
        <p className="text-lg text-zinc-400 max-w-2xl">
          Follow this guide to get your development environment up and running
          in less than 5 minutes.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((step, i) => (
          <div
            key={i}
            className="relative p-6 rounded-2xl border border-zinc-900 bg-zinc-950/50 space-y-3"
          >
            <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400">
              {step.icon}
            </div>
            <h3 className="font-bold text-zinc-200">{step.title}</h3>
            <p className="text-sm text-zinc-500 leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>

      <hr className="border-zinc-900" />

      <div className="space-y-6">
        <h2 className="text-2xl font-bold tracking-tight flex items-center gap-2">
          <Terminal className="w-5 h-5 text-zinc-500" />
          Initial Commands
        </h2>

        <div className="space-y-4">
          <div className="group relative">
            <p className="text-sm text-zinc-500 mb-2 font-mono italic">
              {" "}
              1. Install dependencies
            </p>
            <div className="flex items-center justify-between p-4 bg-black border border-zinc-800 rounded-xl font-mono text-sm group-hover:border-zinc-700 transition-colors">
              <span className="text-emerald-500">npm install</span>
              <Copy className="w-4 h-4 text-zinc-700 cursor-pointer hover:text-zinc-400" />
            </div>
          </div>

          <div className="group relative">
            <p className="text-sm text-zinc-500 mb-2 font-mono italic">
              {" "}
              2. Create your environment file
            </p>
            <div className="flex items-center justify-between p-4 bg-black border border-zinc-800 rounded-xl font-mono text-sm group-hover:border-zinc-700 transition-colors">
              <span className="text-emerald-500">cp .env.example .env</span>
              <Copy className="w-4 h-4 text-zinc-700 cursor-pointer hover:text-zinc-400" />
            </div>
          </div>
        </div>
      </div>

      <div className="p-8 rounded-3xl border border-zinc-900 bg-gradient-to-b from-zinc-900/20 to-transparent space-y-6">
        <div className="space-y-2">
          <h2 className="text-xl font-bold tracking-tight">
            Configuration Order
          </h2>
          <p className="text-sm text-zinc-500">
            To avoid build errors, please follow the documentation in this
            order:
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {[
            {
              label: "Database",
              href: "/docs/database",
              detail: "Setup Prisma & PostgreSQL",
            },
            {
              label: "Authentication",
              href: "/docs/auth",
              detail: "Google, GitHub & Resend",
            },
            {
              label: "Stripe",
              href: "/docs/stripe",
              detail: "Products & Webhooks",
            },
          ].map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className="flex items-center justify-between p-4 rounded-xl bg-zinc-950 border border-zinc-900 hover:border-zinc-700 transition-all group"
            >
              <div className="flex items-center gap-4">
                <span className="w-6 h-6 rounded-full bg-zinc-900 flex items-center justify-center text-[10px] font-bold text-zinc-500 border border-zinc-800">
                  {i + 1}
                </span>
                <div>
                  <p className="text-sm font-bold text-zinc-200">
                    {item.label}
                  </p>
                  <p className="text-[11px] text-zinc-600 uppercase tracking-widest">
                    {item.detail}
                  </p>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-zinc-700 group-hover:text-white group-hover:translate-x-1 transition-all" />
            </Link>
          ))}
        </div>
      </div>

      <div className="p-4 rounded-xl bg-blue-500/5 border border-blue-500/20 flex gap-4 items-start">
        <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
          <Laptop className="w-4 h-4" />
        </div>
        <p className="text-sm text-blue-400/80 leading-relaxed">
          The template is pre-configured with **Tailwind CSS v4** and **React
          19**. Standard Next.js commands like{" "}
          <code className="bg-blue-500/10 px-1 rounded">npm run dev</code> will
          work out of the box once the environment variables are set.
        </p>
      </div>
    </div>
  );
}
