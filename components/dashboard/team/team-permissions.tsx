import { ShieldCheck } from "lucide-react";

export function TeamPermissionsInfo() {
  return (
    <div className="p-4 rounded-2xl bg-zinc-900/20 border border-zinc-900 flex items-start gap-3">
      <div className="mt-1 p-1 bg-violet-500/10 rounded-md">
        <ShieldCheck className="w-4 h-4 text-violet-500" />
      </div>
      <p className="text-xs text-zinc-500 leading-relaxed italic">
        Only **Owners** can manage billing and delete the workspace. Admins can
        manage members and project settings.
      </p>
    </div>
  );
}
