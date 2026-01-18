import { auth } from "@/auth";
import { DangerZone } from "@/components/dashboard/settings/danger-zone";
import { SecuritySummary } from "@/components/dashboard/settings/security-summary";
import { SettingsForm } from "@/components/dashboard/settings/settings-form";
import prisma from "@/lib/prisma";
import { User as UserIcon } from "lucide-react";

export default async function SettingsPage() {
  const session = await auth();
  if (!session?.user?.id)
    return <div className="p-10 text-center font-mono">Unauthenticated</div>;

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    select: { email: true, name: true },
  });

  if (!user)
    return <div className="p-10 text-center font-mono">User not found</div>;

  return (
    <div className="max-w-5xl space-y-12 pb-20">
      <div>
        <div className="flex items-center gap-2 text-zinc-500 font-mono text-[10px] uppercase tracking-widest mb-2">
          <span>Dashboard</span> <span className="text-zinc-800">/</span>{" "}
          <span className="text-zinc-300">Settings</span>
        </div>
        <h1 className="text-4xl font-bold tracking-tighter">
          Account <span className="text-zinc-800 italic">Settings.</span>
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="lg:col-span-2 space-y-16">
          <section className="space-y-6">
            <div className="flex items-center gap-2 pb-2 border-b border-zinc-900">
              <UserIcon className="w-4 h-4 text-zinc-500" />
              <h2 className="text-sm font-mono uppercase tracking-widest text-zinc-400">
                General Profile
              </h2>
            </div>
            <SettingsForm defaultName={user.name || ""} />
          </section>

          <DangerZone />
        </div>

        <div className="space-y-8">
          <div className="sticky top-10 space-y-8">
            <SecuritySummary email={user.email || ""} />
            <div className="p-6 rounded-3xl border border-zinc-900 bg-black">
              <p className="text-xs text-zinc-500 leading-relaxed italic">
                Need help? Contact{" "}
                <span className="text-white underline cursor-pointer">
                  support
                </span>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
