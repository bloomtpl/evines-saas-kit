"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-violet-600/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="relative flex flex-col items-center text-center p-12 md:p-24 rounded-[3.5rem] border border-zinc-900 bg-zinc-950/40 backdrop-blur-md overflow-hidden group">
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover opacity-20 mix-blend-screen grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
            >
              <source src="/videos/final-cta.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/80 via-transparent to-zinc-950/80" />
          </div>

          <div className="relative z-10 flex flex-col items-center">
            <div className="flex items-center gap-2 mb-10 bg-white/5 px-4 py-2 rounded-full border border-white/10 backdrop-blur-md">
              <Zap className="w-4 h-4 text-violet-400 fill-violet-400 animate-pulse" />
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-300">
                Start your journey today
              </span>
            </div>

            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter italic leading-tight mb-8">
              Everything{" "}
              <span className="text-zinc-700 font-medium NOT-italic">
                included.
              </span>
            </h2>

            <p className="text-zinc-400 max-w-xl mb-12 text-lg leading-relaxed">
              Join 500+ founders who skipped the boring setup. Get the complete
              stack and launch your MVP before tomorrow morning.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto">
              <Button className="h-16 px-12 rounded-full bg-white text-black hover:bg-zinc-200 text-xl font-bold group transition-all w-full sm:w-auto shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]">
                Get Instant Access
                <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </Button>

              <div className="flex flex-col items-center sm:items-start gap-2">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <Avatar
                      key={i}
                      className="w-10 h-10 border-2 border-zinc-950"
                    >
                      <AvatarImage
                        src={`https://i.pravatar.cc/100?u=user${i}`}
                        alt={`User ${i}`}
                      />
                      <AvatarFallback className="bg-zinc-800 text-[10px] text-zinc-400">
                        U{i}
                      </AvatarFallback>
                    </Avatar>
                  ))}
                </div>
                <span className="text-zinc-500 text-[11px] font-medium italic">
                  500+ devs already in.
                </span>
              </div>
            </div>

            <div className="mt-16 flex flex-wrap justify-center gap-x-10 gap-y-4 opacity-30 text-[9px] font-bold uppercase tracking-[0.3em] text-white">
              <span className="hover:opacity-100 transition-opacity cursor-default">
                One-time payment
              </span>
              <span className="hover:opacity-100 transition-opacity cursor-default">
                Lifetime updates
              </span>
              <span className="hover:opacity-100 transition-opacity cursor-default">
                Full source code
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
