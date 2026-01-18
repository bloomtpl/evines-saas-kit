import {
  AlertTriangle,
  ArrowUpRight,
  GitBranch,
  Globe,
  LucideProps,
  Server,
  ShieldCheck,
  Terminal,
} from "lucide-react";

const DeployIcon = ({
  icon: Icon,
}: {
  icon: React.ComponentType<LucideProps>;
}) => (
  <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400">
    <Icon className="w-5 h-5" />
  </div>
);

export default function DeploymentDoc() {
  return (
    <div className="space-y-12 text-white">
      <div className="space-y-4">
        <h1 className="text-5xl font-bold tracking-tighter italic">
          Deployment{" "}
          <span className="text-zinc-800 NOT-italic text-2xl">.</span>
        </h1>
        <p className="text-lg text-zinc-400 max-w-2xl leading-relaxed">
          The template is optimized for modern cloud platforms. Follow these
          steps to ensure your production environment is secure and fully
          functional.
        </p>
      </div>

      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <DeployIcon icon={Server} />
          <h2 className="text-2xl font-bold tracking-tight">
            1. Production Database
          </h2>
        </div>
        <p className="text-sm text-zinc-500 leading-relaxed">
          Ensure you are using a production-ready PostgreSQL instance. Update
          your <code className="text-zinc-300">DATABASE_URL</code> to point to
          your live database.
        </p>
        <div className="p-4 rounded-xl bg-amber-500/5 border border-amber-500/20 flex gap-4 items-start">
          <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
          <p className="text-xs text-amber-500/80 leading-relaxed italic">
            <strong>SSL Requirement:</strong> Most cloud databases require
            <code className="bg-amber-500/10 px-1 rounded mx-1">
              ?sslmode=require
            </code>
            at the end of the connection string.
          </p>
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <DeployIcon icon={Terminal} />
          <h2 className="text-2xl font-bold tracking-tight">
            2. Build Configuration
          </h2>
        </div>
        <p className="text-sm text-zinc-500">
          Your hosting provider should run the following commands during the
          build phase:
        </p>
        <div className="p-4 bg-black border border-zinc-800 rounded-xl font-mono text-sm text-emerald-500 space-y-1">
          <p>npx prisma generate && next build</p>
        </div>
        <p className="text-xs text-zinc-600">
          This ensures the Prisma Client is updated with your production schema
          before the Next.js build starts.
        </p>
      </section>

      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <DeployIcon icon={ShieldCheck} />
          <h2 className="text-2xl font-bold tracking-tight">
            3. Environment Variables
          </h2>
        </div>
        <p className="text-sm text-zinc-500">
          In your hosting dashboard, make sure to update these key variables for
          production:
        </p>
        <div className="p-4 bg-zinc-950 border border-zinc-900 rounded-xl font-mono text-[11px] text-zinc-400 space-y-3">
          <div>
            <p className="text-zinc-200">NEXT_PUBLIC_APP_URL</p>
            <p className="text-zinc-600 italic">
              Set this to your live domain (e.g., https://yourapp.com)
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <DeployIcon icon={GitBranch} />
          <h2 className="text-2xl font-bold tracking-tight">
            4. Stripe Webhooks
          </h2>
        </div>
        <p className="text-sm text-zinc-500 leading-relaxed">
          Once deployed, create a **Production Webhook** in your Stripe
          Dashboard. Point it to:
        </p>
        <div className="flex items-center justify-between p-4 bg-black border border-zinc-800 rounded-xl font-mono text-sm text-zinc-300">
          <span>https://your-domain.com/api/webhook/stripe</span>
        </div>
        <p className="text-xs text-zinc-600">
          Update the{" "}
          <code className="text-zinc-400 italic">STRIPE_WEBHOOK_SECRET</code> in
          your production environment with the new live secret.
        </p>
      </section>

      <div className="pt-8 border-t border-zinc-900 text-center">
        <div className="inline-flex items-center justify-center p-4 rounded-full bg-zinc-900 border border-zinc-800 mb-6">
          <Globe className="w-8 h-8 text-emerald-500 animate-pulse" />
        </div>
        <h3 className="text-3xl font-bold tracking-tighter italic mb-4">
          Your SaaS is Live!
        </h3>
        <p className="text-zinc-500 text-sm max-w-md mx-auto mb-8">
          Verify your authentication flows and stripe payments on the live URL
          to ensure everything is synced correctly.
        </p>
        <button className="px-8 py-3 bg-white text-black rounded-full font-bold text-sm hover:bg-zinc-200 transition-all flex items-center gap-2 mx-auto">
          View Live Demo <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
