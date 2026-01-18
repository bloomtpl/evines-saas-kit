import { CheckCircle2 } from "lucide-react";

const features = [
  "Unlimited Projects",
  "API Access",
  "Community Support",
  "Custom Domain",
];

export function PlanFeatures() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {features.map((feat) => (
        <div
          key={feat}
          className="flex items-center gap-3 p-4 rounded-2xl border border-zinc-900 bg-black/40 hover:border-zinc-800 transition-colors"
        >
          <div className="bg-emerald-500/10 p-1 rounded-full">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
          </div>
          <span className="text-sm text-zinc-400 font-medium">{feat}</span>
        </div>
      ))}
    </div>
  );
}
