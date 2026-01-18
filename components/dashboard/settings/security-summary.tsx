import { Fingerprint, Mail } from "lucide-react";

export function SecuritySummary({ email }: { email: string }) {
  return (
    <div className="p-6 rounded-3xl border border-zinc-900 bg-zinc-950/50 space-y-6">
      <h3 className="text-sm font-mono uppercase tracking-widest text-zinc-500">
        Security Summary
      </h3>
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-zinc-900">
            <Mail className="w-4 h-4 text-zinc-400" />
          </div>
          <div>
            <p className="text-[10px] text-zinc-500 uppercase font-mono tracking-tighter">
              Primary Email
            </p>
            <p className="text-sm text-zinc-200 font-medium">{email}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-zinc-900">
            <Fingerprint className="w-4 h-4 text-zinc-400" />
          </div>
          <div>
            <p className="text-[10px] text-zinc-500 uppercase font-mono tracking-tighter">
              Auth Method
            </p>
            <p className="text-sm text-zinc-200 font-medium italic">
              Magic Link / Social
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
