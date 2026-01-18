import {
  AlertTriangle,
  Chrome,
  Github,
  Info,
  Key,
  Link as LinkIcon,
  Lock,
  Mail,
  ShieldCheck,
} from "lucide-react";

export default function AuthDoc() {
  return (
    <div className="space-y-12 text-white">
      <div className="space-y-4">
        <h1 className="text-5xl font-bold tracking-tighter italic">
          Authentication{" "}
          <span className="text-zinc-800 NOT-italic text-2xl">.</span>
        </h1>
        <p className="text-lg text-zinc-400 max-w-2xl leading-relaxed">
          Evines uses **Auth.js (v5)**. You can start with just Email (Resend)
          or add Social Login (Google & GitHub).
        </p>
        <a
          href="https://authjs.dev/getting-started/authentication"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-emerald-500 hover:underline font-medium"
        >
          <LinkIcon className="w-4 h-4" />
          Full Auth.js Documentation
        </a>
      </div>

      <div className="p-6 rounded-3xl border border-emerald-500/20 bg-emerald-500/5">
        <h3 className="text-emerald-500 font-bold flex items-center gap-2 mb-2">
          <ShieldCheck className="w-5 h-5" />
          Pro-tip: Start with Resend only
        </h3>
        <p className="text-sm text-emerald-500/70 leading-relaxed">
          You don&apos;t need to configure everything at once. **The app will
          work perfectly with only Resend configured.** Social providers can be
          added later as you scale.
        </p>
      </div>

      <section className="p-6 rounded-2xl border border-zinc-900 bg-zinc-950/50 space-y-4">
        <div className="flex items-center gap-3">
          <Key className="w-5 h-5 text-zinc-500" />
          <h2 className="text-xl font-bold tracking-tight text-zinc-200">
            1. Generate Auth Secret
          </h2>
        </div>
        <p className="text-sm text-zinc-500 font-mono italic">
          Run this to generate your session encryption key
        </p>
        <div className="p-3 bg-black border border-zinc-800 rounded-lg font-mono text-sm text-emerald-500">
          npx auth secret
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400">
            <Mail className="w-5 h-5" />
          </div>
          <h2 className="text-2xl font-bold tracking-tight">
            Magic Links (Resend)
          </h2>
        </div>

        <div className="space-y-4 text-sm text-zinc-500 leading-relaxed">
          <p>
            1. Create an API Key at{" "}
            <a
              href="https://resend.com"
              target="_blank"
              className="text-zinc-300 underline font-bold"
            >
              resend.com
            </a>
            .
          </p>
          <p>
            2. Set <code className="text-zinc-300">AUTH_RESEND_KEY</code> in
            your .env.
          </p>
          <p>
            3. Use <code className="text-zinc-300">onboarding@resend.dev</code>{" "}
            as <code className="text-zinc-300">EMAIL_FROM</code> for instant
            testing.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 flex gap-4 items-start">
          <Info className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
          <p className="text-xs text-zinc-400 leading-relaxed italic">
            <strong>Note:</strong> When using the onboarding email, you can only
            send links to the email address associated with your Resend account.
          </p>
        </div>
      </section>

      <section className="space-y-8">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-zinc-400 font-mono uppercase text-sm tracking-[0.2em]">
            Optional: Social Providers
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl border border-zinc-900 bg-zinc-950/30 space-y-4">
            <div className="flex items-center gap-2 font-bold text-zinc-200">
              <Chrome className="w-4 h-4 text-blue-500" /> Google Cloud
            </div>
            <p className="text-xs text-zinc-500 leading-relaxed">
              Create a project in the{" "}
              <a
                href="https://console.cloud.google.com/"
                target="_blank"
                className="text-zinc-400 underline"
              >
                Google Console
              </a>{" "}
              and set the redirect URI:
            </p>
            <code className="block p-2 bg-black rounded text-[10px] text-zinc-400 truncate">
              YOUR_URL/api/auth/callback/google
            </code>
          </div>

          <div className="p-6 rounded-2xl border border-zinc-900 bg-zinc-950/30 space-y-4">
            <div className="flex items-center gap-2 font-bold text-zinc-200">
              <Github className="w-4 h-4 text-white" /> GitHub Developers
            </div>
            <p className="text-xs text-zinc-500 leading-relaxed">
              Register a new OAuth App in{" "}
              <a
                href="https://github.com/settings/developers"
                target="_blank"
                className="text-zinc-400 underline"
              >
                GitHub Settings
              </a>{" "}
              and set the callback URL:
            </p>
            <code className="block p-2 bg-black rounded text-[10px] text-zinc-400 truncate">
              YOUR_URL/api/auth/callback/github
            </code>
          </div>
        </div>

        <div className="p-6 bg-zinc-950 border border-zinc-900 rounded-3xl font-mono text-[11px] text-zinc-400 space-y-2 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <Lock className="w-12 h-12" />
          </div>
          <p className="text-zinc-600 mb-2">Copy these into your .env file</p>
          <p>
            AUTH_SECRET=&quot;<span className="text-zinc-500 italic">...</span>
            &quot;
          </p>
          <p>
            AUTH_RESEND_KEY=&quot;
            <span className="text-zinc-500 italic">re_...</span>&quot;
          </p>
          <p>
            EMAIL_FROM=&quot;
            <span className="text-zinc-500 italic">onboarding@resend.dev</span>
            &quot;
          </p>
          <div className="h-4" />
          <p className="text-zinc-800"># Required for Social Login</p>
          <p>AUTH_GOOGLE_ID=&quot;&quot;</p>
          <p>AUTH_GOOGLE_SECRET=&quot;&quot;</p>
          <p>AUTH_GITHUB_ID=&quot;&quot;</p>
          <p>AUTH_GITHUB_SECRET=&quot;&quot;</p>
        </div>
      </section>

      <div className="pt-8 border-t border-zinc-900">
        <div className="p-8 rounded-3xl bg-white text-black flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_0_40px_-10px_rgba(255,255,255,0.2)]">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl font-bold tracking-tighter italic">
              Ready to explore?
            </h3>
            <p className="text-sm opacity-70 font-medium">
              Database and Auth are correctly linked.
            </p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="px-6 py-3 bg-black text-white rounded-xl font-mono text-sm border border-white/20">
              npm run dev
            </div>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-black/50">
              localhost:3000
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-3 mt-8">
          <AlertTriangle className="w-4 h-4 text-zinc-600" />
          <p className="text-xs text-zinc-600 italic">
            Log in via the landing page to test your dashboard access.
          </p>
        </div>
      </div>
    </div>
  );
}
