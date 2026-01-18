import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";

interface EmptyStateProps {
  title: string;
  description: string;
  actionText?: string;
  onAction?: () => void;
}

export function EmptyState({
  title,
  description,
  actionText = "View Templates",
  onAction,
}: EmptyStateProps) {
  return (
    <div className="group relative rounded-[3rem] border border-dashed border-zinc-800 bg-zinc-950/20 p-20 flex flex-col items-center text-center transition-all hover:bg-zinc-950/40 hover:border-zinc-700">
      <div className="relative mb-6">
        <div className="absolute inset-0 bg-violet-500/10 blur-2xl rounded-full group-hover:bg-violet-500/20 transition-colors" />
        <div className="relative w-16 h-16 rounded-2xl bg-zinc-900 flex items-center justify-center border border-zinc-800">
          <Zap className="w-8 h-8 text-zinc-500 group-hover:text-violet-400 transition-colors" />
        </div>
      </div>

      <div className="max-w-xs space-y-2 mb-8">
        <h3 className="text-xl font-bold tracking-tight text-white italic">
          {title}
        </h3>
        <p className="text-zinc-500 text-sm leading-relaxed">{description}</p>
      </div>

      <Button
        variant="outline"
        onClick={onAction}
        className="rounded-full border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-900 px-8 transition-all font-mono text-[10px] uppercase tracking-widest"
      >
        {actionText}
      </Button>

      <div className="absolute bottom-6 right-8 opacity-20 pointer-events-none hidden md:block">
        <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-[0.4em]">
          Waiting for input_
        </span>
      </div>
    </div>
  );
}
