"use client";

import { Button } from "@/components/ui/button";
import { CreditCard, ExternalLink, Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export function ManageSubscriptionButton() {
  const [loading, setLoading] = useState(false);

  const onClick = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/stripe/portal");

      if (!response.ok) throw new Error("Failed to fetch portal URL");

      const data = await response.json();

      window.location.href = data.url;
    } catch (error) {
      console.error("Portal redirection error", error);
      toast.error("Unable to load the payment gateway.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      disabled={loading}
      onClick={onClick}
      variant="outline"
      className="bg-zinc-900 border-zinc-800 hover:bg-zinc-800 text-white h-11 px-6 rounded-xl transition-all group"
    >
      {loading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Connecting to Stripe...
        </>
      ) : (
        <>
          <CreditCard className="mr-2 h-4 w-4 text-zinc-500 group-hover:text-white transition-colors" />
          Manage Billing
          <ExternalLink className="ml-2 h-3 w-3 text-zinc-600 opacity-0 group-hover:opacity-100 transition-all" />
        </>
      )}
    </Button>
  );
}
