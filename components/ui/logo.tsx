"use client";

import { LoaderPinwheel } from "lucide-react";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 group cursor-pointer">
      <div className="relative flex items-center justify-center">
        <LoaderPinwheel
          className="w-7 h-7 text-white transition-transform duration-700 group-hover:rotate-180"
          strokeWidth={2.5}
        />
        <div className="absolute inset-0 bg-white/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      <span className="text-2xl font-bold tracking-tighter text-white">
        EVINES<span className="text-zinc-500 font-medium">.</span>
      </span>
    </Link>
  );
}
