import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";
import { ManageSubscriptionButton } from "./manage-sub-button";

interface PlanSummaryProps {
  plan: string | null | undefined;
  price: number;
  isYearly: boolean;
  expiryDate: Date | null | undefined;
  isCancelled: boolean | null | undefined;
}

export function PlanSummary({
  plan,
  price,
  isYearly,
  expiryDate,
  isCancelled,
}: PlanSummaryProps) {
  const dateFormatted = expiryDate
    ? new Date(expiryDate).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    : "N/A";

  const isFree = !plan || plan === "FREE";

  return (
    <div className="p-8 rounded-3xl border border-zinc-900 bg-zinc-950/50 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 shadow-2xl">
      <div className="space-y-4">
        <Badge className="bg-white text-black hover:bg-white rounded-full px-4 font-bold tracking-tighter">
          {plan || "FREE"} PLAN
        </Badge>
        <div className="space-y-1">
          <p className="text-3xl font-bold tracking-tighter">
            {isFree
              ? "Always Free"
              : `${price}€ / ${isYearly ? "year" : "month"}`}
          </p>
          <div className="flex items-center gap-2 text-zinc-500 text-sm font-mono uppercase tracking-tighter">
            <Calendar className="w-3.5 h-3.5" />
            <span>
              {isCancelled ? "Expires" : "Renews"} on {dateFormatted}
            </span>
          </div>
        </div>
      </div>
      <ManageSubscriptionButton />
    </div>
  );
}
