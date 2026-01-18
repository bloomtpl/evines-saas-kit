"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft, Home, Search } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-violet-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 w-full max-w-md text-center space-y-8">
        <div className="space-y-2">
          <h1 className="text-[120px] font-black leading-none tracking-tighter text-zinc-900 select-none">
            404
          </h1>
          <div className="bg-zinc-900/50 border border-zinc-800 p-2 rounded-xl inline-flex items-center gap-2 px-4 translate-y-[-40px]">
            <Search className="w-4 h-4 text-zinc-500" />
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
              Page not found
            </span>
          </div>
        </div>

        <div className="space-y-3">
          <h2 className="text-2xl font-bold text-white tracking-tight">
            You&apos;ve reached the void.
          </h2>
          <p className="text-zinc-500 text-sm leading-relaxed">
            The page you are looking for doesn&apos;t exist or has been moved to
            another dimension. Let&apos;s get you back to safety.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Button
            variant="outline"
            className="w-full sm:w-auto border-zinc-800 bg-zinc-900/50 hover:bg-zinc-800 text-white rounded-xl h-12 px-6"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="w-4 h-4 mr-2 text-zinc-500" />
            Go Back
          </Button>

          <Button
            asChild
            className="w-full sm:w-auto bg-white text-black hover:bg-zinc-200 rounded-xl h-12 px-8 font-bold"
          >
            <Link href="/">
              <Home className="w-4 h-4 mr-2" />
              Return Home
            </Link>
          </Button>
        </div>

        <div className="pt-20">
          <p className="text-[10px] text-zinc-800 font-mono uppercase tracking-[0.3em]">
            Error Code: 0x404_NULL_POINTER
          </p>
        </div>
      </div>
    </div>
  );
}
