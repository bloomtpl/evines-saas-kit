"use client";

import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Check,
  CreditCard,
  Database,
  Lock,
  ShieldCheck,
  Terminal,
} from "lucide-react";
import Image from "next/image";

export default function Features() {
  return (
    <section id="features" className="py-32 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col mb-16 space-y-4">
          <div className="flex items-center gap-2 text-zinc-500 font-mono text-[10px] md:text-xs tracking-[0.3em] uppercase">
            <span className="w-12 h-[1px] bg-zinc-800" />
            Product Architecture
          </div>

          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter italic leading-tight">
            Everything{" "}
            <span className="text-zinc-700 font-medium NOT-italic">
              included.
            </span>
          </h2>

          <p className="text-zinc-500 text-sm md:text-base max-w-xl font-medium">
            Production-ready modules designed for high-performance applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-px bg-zinc-800 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl">
          <div className="md:col-span-3 md:row-span-2 relative group bg-black min-h-[600px] flex flex-col overflow-hidden">
            <div className="absolute inset-0 z-0">
              <Image
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
                alt="Architecture"
                fill
                className="object-cover opacity-40 grayscale group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            </div>

            <div className="relative z-10 p-12 mt-auto">
              <Badge className="mb-6 bg-violet-500/10 text-violet-400 border-violet-500/20">
                Production-ready Stack
              </Badge>

              <h3 className="text-4xl font-bold mb-6 tracking-tight">
                A Modern SaaS <br /> Architecture, Done Right.
              </h3>

              <ul className="space-y-3 mb-8">
                {[
                  "Next.js 16 App Router & Server Components",
                  "Server Actions for mutations & forms",
                  "Edge-ready rendering & caching strategy",
                  "Clean separation: auth, billing, app logic",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-zinc-400 text-sm"
                  >
                    <Check className="w-4 h-4 text-violet-500" />
                    {item}
                  </li>
                ))}
              </ul>

              <button className="flex items-center gap-2 text-sm font-semibold py-3 px-6 bg-white text-black rounded-full hover:bg-zinc-200 transition-all">
                Explore the architecture <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="md:col-span-3 p-12 bg-black flex flex-col justify-between group">
            <div className="flex justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-2">
                  Stripe Billing, Production-Ready
                </h3>
                <p className="text-zinc-500 text-sm max-w-sm">
                  Subscriptions are fully implemented with Stripe. Handle plans,
                  upgrades, cancellations, and webhooks without writing billing
                  logic from scratch.
                </p>
              </div>
              <CreditCard className="w-8 h-8 text-zinc-700 group-hover:text-white transition-colors" />
            </div>

            <div className="mt-8 flex gap-4 overflow-hidden">
              {[
                "monthly_subscription",
                "yearly_subscription",
                "customer_portal",
                "stripe_webhooks",
              ].map((plan) => (
                <div
                  key={plan}
                  className="px-4 py-2 rounded-lg border border-zinc-800 bg-zinc-900/50 text-[10px] text-zinc-400 font-mono"
                >
                  {plan}
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-2 p-10 bg-black flex flex-col gap-6 group">
            <div className="p-3 w-fit rounded-xl bg-zinc-900 border border-zinc-800">
              <Lock className="w-6 h-6 text-violet-500" />
            </div>
            <div>
              <h4 className="text-xl font-bold mb-2">
                Authentication, Handled
              </h4>
              <p className="text-zinc-500 text-sm">
                Auth.js v5 with email magic links, OAuth providers, protected
                routes and a clean Prisma-backed session model.
              </p>
            </div>
          </div>

          <div className="md:col-span-1 p-10 bg-black flex flex-col items-center justify-center text-center group">
            <Database className="w-10 h-10 text-zinc-700 mb-4 group-hover:text-blue-500 transition-colors" />
            <span className="text-xs font-mono text-zinc-500">
              Prisma + PostgreSQL
            </span>
          </div>

          <div className="md:col-span-3 p-12 bg-black flex items-center justify-between group overflow-hidden">
            <div className="z-10">
              <h3 className="text-2xl font-bold mb-2">
                Reusable UI Components
              </h3>
              <p className="text-zinc-500 text-sm max-w-xs">
                Carefully designed SaaS components: dashboards, forms, pricing
                tables, modals and settings screens.
              </p>
            </div>

            <div className="flex gap-2 rotate-12 opacity-30 group-hover:opacity-60 transition-opacity">
              <div className="w-20 h-32 rounded-xl border border-zinc-700 bg-zinc-800/50" />
              <div className="w-20 h-32 rounded-xl border border-zinc-700 bg-zinc-800" />
              <div className="w-20 h-32 rounded-xl border border-zinc-700 bg-zinc-900" />
            </div>
          </div>

          <div className="md:col-span-3 p-12 bg-black group">
            <div className="flex items-center gap-4 mb-6">
              <Terminal className="w-6 h-6 text-emerald-500" />
              <h3 className="text-2xl font-bold">Built for Developers</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                "Full TypeScript end-to-end",
                "Typed database & API boundaries",
                "Simple and scalable project structure",
                "Easy to extend and customize",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm text-zinc-400"
                >
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 mt-8 gap-px bg-zinc-800 border border-zinc-800 rounded-2xl overflow-hidden">
          {[
            { label: "Deployment", val: "Edge & Node ready" },
            { label: "Compliance", val: "GDPR friendly" },
            { label: "SEO", val: "Metadata & OG built-in" },
            { label: "Setup", val: "< 2 min local setup" },
          ].map((s) => (
            <div
              key={s.label}
              className="bg-black p-6 flex flex-col items-center"
            >
              <span className="text-[10px] uppercase tracking-tighter text-zinc-500 mb-1">
                {s.label}
              </span>
              <span className="text-sm font-bold tracking-tight">{s.val}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
