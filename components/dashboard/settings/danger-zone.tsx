import { ShieldAlert } from "lucide-react";
import { DeleteAccountButton } from "./delete-account-button";

export function DangerZone() {
  return (
    <section className="space-y-6 pt-10">
      <div className="flex items-center gap-2 pb-2 border-b border-zinc-900 text-rose-900">
        <ShieldAlert className="w-4 h-4" />
        <h2 className="text-sm font-mono uppercase tracking-widest font-semibold">
          Danger Zone
        </h2>
      </div>
      <div className="p-8 rounded-3xl border border-rose-950/30 bg-rose-950/5">
        <h3 className="text-white font-bold mb-2">Delete Account</h3>
        <p className="text-sm text-zinc-500 mb-8 max-w-md leading-relaxed">
          This action is irreversible. All your data will be permanently deleted
          from our servers.
        </p>
        <DeleteAccountButton />
      </div>
    </section>
  );
}
