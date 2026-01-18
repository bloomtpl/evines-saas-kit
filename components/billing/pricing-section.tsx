"use client";

import { PricingButton } from "@/components/billing/pricing-button";
import { Badge } from "@/components/ui/badge";
import { PLANS } from "@/config/plans";
import { Check, Sparkles } from "lucide-react";
import { useState } from "react";

export function PricingSection({
  currentPlan = "FREE",
}: {
  currentPlan?: string;
}) {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section
      id="pricing"
      className="py-32 bg-black text-white flex flex-col items-center"
    >
      <div className="max-w-7xl mx-auto px-6 w-full flex flex-col items-center">
        <div className="flex flex-col items-center text-center mb-20 space-y-4">
          <div className="flex items-center justify-center gap-2 text-zinc-500 font-mono text-[10px] tracking-[0.3em] uppercase">
            <span className="w-8 h-[1px] bg-zinc-800" />
            Flexible Pricing
            <span className="w-8 h-[1px] bg-zinc-800" />
          </div>

          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter italic leading-[0.9]">
            Pick your{" "}
            <span className="text-zinc-700 font-medium NOT-italic">speed.</span>
          </h2>

          <p className="text-zinc-500 text-sm md:text-base font-medium">
            Simple, transparent billing. No hidden fees.
          </p>
        </div>

        <div className="flex items-center gap-6 mb-16 bg-zinc-900/50 p-2 rounded-full border border-zinc-800">
          <button
            onClick={() => setIsYearly(false)}
            className={`px-6 py-2 rounded-full text-xs font-bold transition-all ${
              !isYearly
                ? "bg-white text-black"
                : "text-zinc-500 hover:text-white"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setIsYearly(true)}
            className={`px-6 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-2 ${
              isYearly
                ? "bg-white text-black"
                : "text-zinc-500 hover:text-white"
            }`}
          >
            Annual{" "}
            <Badge className="bg-violet-500 text-[9px] h-4 px-1 leading-none">
              -20%
            </Badge>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-zinc-800 border border-zinc-800 rounded-3xl overflow-hidden max-w-5xl w-full shadow-2xl">
          {PLANS.map((plan) => {
            const isPro = plan.id === "PRO";

            return (
              <div
                key={plan.id}
                className={`relative p-12 flex flex-col bg-black ${
                  isPro ? "z-10" : "z-0"
                }`}
              >
                {isPro && (
                  <div className="absolute top-0 right-0 p-8">
                    <Sparkles className="w-5 h-5 text-violet-500" />
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="text-xl font-bold tracking-tight mb-2 uppercase italic">
                    {plan.name}
                  </h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">
                    {plan.description}
                  </p>
                </div>

                <div className="mb-10 flex items-baseline gap-2">
                  <span className="text-6xl font-bold tracking-tighter">
                    {isYearly ? plan.yearlyPrice : plan.monthlyPrice}€
                  </span>
                  <span className="text-zinc-600 font-mono text-xs uppercase tracking-widest">
                    / {isYearly ? "year" : "month"}
                  </span>
                </div>

                <div className="space-y-4 mb-12 flex-1">
                  <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest font-bold">
                    What&apos;s included
                  </p>
                  {plan.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center text-sm text-zinc-400 group"
                    >
                      <div className="mr-3 w-4 h-4 rounded-full border border-zinc-800 flex items-center justify-center bg-zinc-900 group-hover:border-zinc-500 transition-colors">
                        <Check className="h-2.5 w-2.5 text-white" />
                      </div>
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="relative z-10">
                  <PricingButton
                    planId={plan.id}
                    isYearly={isYearly}
                    currentPlan={currentPlan}
                  />
                </div>

                {isPro && (
                  <div className="absolute inset-0 bg-gradient-to-b from-violet-500/5 to-transparent pointer-events-none" />
                )}
              </div>
            );
          })}
        </div>

        <p className="mt-12 text-zinc-600 text-[11px] font-mono uppercase tracking-[0.2em]">
          Secure payments powered by Stripe. Cancel anytime.
        </p>
      </div>
    </section>
  );
}
