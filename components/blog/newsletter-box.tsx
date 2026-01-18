"use client";

import { ArrowRight } from "lucide-react";
import { useState } from "react";

export function NewsletterBox() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="relative p-1 bg-gradient-to-b from-zinc-800 to-transparent rounded-[3rem] max-w-4xl mx-auto">
      <div className="bg-black rounded-[2.8rem] p-12 md:p-16 flex flex-col items-center text-center border border-zinc-900">
        <div className="w-12 h-12 rounded-2xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mb-8">
          <ArrowRight className="text-violet-500 -rotate-45" />
        </div>

        <h3 className="text-3xl md:text-4xl font-bold italic tracking-tight mb-4">
          Join the{" "}
          <span className="text-zinc-700 NOT-italic">inner circle.</span>
        </h3>
        <p className="text-zinc-500 mb-10 max-w-sm font-medium">
          No spam. Just high-quality engineering updates once a month.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex w-full max-w-md flex-col md:flex-row gap-3"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="engineer@company.com"
            className="flex-1 bg-zinc-900/50 border border-zinc-800 rounded-2xl px-6 py-4 text-white font-mono text-sm placeholder:text-zinc-700 focus:outline-none focus:ring-2 focus:ring-violet-500/50 transition-all"
          />
          <button
            type="submit"
            className="bg-white text-black font-bold px-8 py-4 rounded-2xl hover:bg-zinc-200 transition-colors text-sm uppercase tracking-tighter shrink-0"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}
