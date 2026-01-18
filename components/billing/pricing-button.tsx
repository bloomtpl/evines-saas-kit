"use client";

import { Button } from "@/components/ui/button";
import { PLANS } from "@/config/plans";
import { ArrowRight, Loader2 } from "lucide-react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function PricingButton({
  planId,
  isYearly,
  currentPlan,
}: {
  planId: string;
  isYearly: boolean;
  currentPlan: string;
}) {
  const { status } = useSession();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const plan = PLANS.find((p) => p.id === planId);
  const priceId = isYearly ? plan?.priceIds.yearly : plan?.priceIds.monthly;
  const isCurrentPlan = currentPlan.toUpperCase() === planId.toUpperCase();
  const isFree = planId.toUpperCase() === "FREE";

  const handleAction = async () => {
    if (status === "unauthenticated") {
      router.push("/signin?callbackUrl=/pricing");
      return;
    }

    setIsLoading(true);

    try {
      if (currentPlan !== "FREE") {
        const response = await fetch("/api/stripe/portal");
        const data = await response.json();
        if (data.url) {
          window.location.href = data.url;
        }
        return;
      }

      const response = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ priceId }),
      });

      const data = await response.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Stripe Error:", error);
      setIsLoading(false);
    }
  };

  return (
    <Button
      onClick={handleAction}
      className={`w-full h-12 rounded-full font-bold transition-all duration-300 ${
        isCurrentPlan
          ? "bg-zinc-900 border-zinc-800 text-zinc-500 hover:bg-zinc-900 cursor-default"
          : "bg-white text-black hover:bg-zinc-200 hover:scale-[1.02] active:scale-[0.98]"
      }`}
      variant={isCurrentPlan ? "outline" : "default"}
      disabled={
        isLoading ||
        (!isFree && !priceId) ||
        isCurrentPlan ||
        status === "loading"
      }
    >
      {isLoading ? (
        <Loader2 className="h-4 w-4 animate-spin" />
      ) : (
        <div className="flex items-center gap-2">
          {isCurrentPlan ? (
            "Current Plan"
          ) : (
            <>
              {isFree ? "Get Started" : `Upgrade to ${plan?.name}`}
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </div>
      )}
    </Button>
  );
}
