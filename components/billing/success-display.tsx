import { ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";

export function SuccessDisplay() {
  return (
    <div className="bg-zinc-900/20 border border-zinc-800 rounded-[2.5rem] p-12 max-w-md w-full text-center space-y-8 backdrop-blur-sm">
      <div className="flex justify-center">
        <div className="bg-violet-500/10 p-4 rounded-2xl border border-violet-500/20">
          <CheckCircle className="w-10 h-10 text-violet-500" />
        </div>
      </div>

      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tighter italic text-white">
          Access <span className="text-zinc-700 NOT-italic">Granted.</span>
        </h1>
        <p className="text-zinc-500 font-medium leading-relaxed">
          Your account has been upgraded. Ready to build at warp speed?
        </p>
      </div>

      <div className="pt-4">
        <Link
          href="/dashboard"
          className="group inline-flex w-full justify-center items-center gap-2 px-6 py-4 text-sm font-bold text-black bg-white rounded-2xl hover:bg-zinc-200 transition-all uppercase tracking-tighter"
        >
          Go to Dashboard
          <ArrowRight
            size={16}
            className="group-hover:translate-x-1 transition-transform"
          />
        </Link>
      </div>

      <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
        Transaction verified • SECURE-NODE-2026
      </p>
    </div>
  );
}
