"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight, Sparkles, Terminal } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="relative w-full min-h-[90vh] flex flex-col items-center justify-center overflow-hidden py-24 bg-black">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-50"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,black_100%)] z-10 opacity-60" />
      </div>

      <div className="relative z-20 flex flex-col items-center text-center px-6 max-w-5xl mx-auto">
        <div className="mb-8 flex items-center gap-3 px-3 py-1 rounded-full border border-white/10 bg-black/40 backdrop-blur-md">
          <div className="flex items-center justify-center bg-white/10 p-1 rounded-full">
            <Sparkles className="w-3 h-3 text-white" />
          </div>
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-300">
            Evines v1.0 — Warp Speed Edition
          </span>
          <ChevronRight className="w-3 h-3 text-zinc-600" />
        </div>

        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white leading-[0.8] mb-8 italic">
          Ship your SaaS <br />
          <span className="text-zinc-500 NOT-italic">faster than light.</span>
        </h1>

        <p className="text-zinc-300 max-w-2xl mx-auto text-lg md:text-xl font-medium leading-relaxed mb-12 drop-shadow-md">
          The ultimate Next.js foundation. Production-ready modules with a{" "}
          <span className="text-white italic">cinematic cosmic touch</span>{" "}
          designed for modern engineers.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Button
            size="lg"
            className="group rounded-full h-14 px-10 bg-white text-black hover:bg-zinc-200 font-bold text-lg shadow-[0_0_40px_rgba(255,255,255,0.2)] transition-all"
            asChild
          >
            <Link href="dashboard">
              Start Building
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="rounded-full h-14 px-10 border-white/10 bg-white/5 text-white backdrop-blur-xl text-lg hover:bg-white/10 transition-all"
            asChild
          >
            <Link href="docs">
              <Terminal className="mr-2 h-5 w-5 text-zinc-400" />
              Documentation
            </Link>
          </Button>
        </div>
      </div>

      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-30" />
    </div>
  );
}
