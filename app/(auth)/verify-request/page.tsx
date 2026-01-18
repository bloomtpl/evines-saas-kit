import { AuthLayoutShell } from "@/components/auth/auth-layout-shell";
import { ArrowLeft, Inbox } from "lucide-react";
import Link from "next/link";

export default function VerifyRequestPage() {
  return (
    <AuthLayoutShell
      title="Check your inbox"
      description="We've sent a magic link to your email address. Click the link to be signed in automatically."
    >
      <div className="w-full space-y-8">
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-violet-500/20 blur-3xl rounded-full animate-pulse" />
            <div className="relative bg-zinc-900 border border-zinc-800 p-6 rounded-3xl">
              <Inbox
                className="w-12 h-12 text-white animate-bounce"
                strokeWidth={1.5}
              />
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="p-4 rounded-xl bg-zinc-900/30 border border-zinc-900 text-[11px] text-zinc-500 font-mono uppercase tracking-wider text-center">
            Tip: Check your spam folder if you don&apos;t see it within 60
            seconds.
          </div>

          <div className="flex justify-center">
            <Link
              href="/signin"
              className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to sign in
            </Link>
          </div>
        </div>

        <div className="pt-8 text-center">
          <p className="text-[10px] text-zinc-700 font-mono uppercase tracking-widest">
            Secured by Evines Auth Service
          </p>
        </div>
      </div>
    </AuthLayoutShell>
  );
}
