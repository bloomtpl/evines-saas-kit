import {
  AlertCircle,
  CheckCircle2,
  CreditCard,
  Info,
  LucideProps,
  Settings,
  Terminal,
  Zap,
} from "lucide-react";

const StepIcon = ({
  icon: Icon,
}: {
  icon: React.ComponentType<LucideProps>;
}) => (
  <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400">
    <Icon className="w-5 h-5" />
  </div>
);

export default function StripeDoc() {
  return (
    <div className="space-y-12 text-white">
      <div className="space-y-4">
        <h1 className="text-5xl font-bold tracking-tighter italic">
          Stripe Billing{" "}
          <span className="text-zinc-800 NOT-italic text-2xl">.</span>
        </h1>
        <p className="text-lg text-zinc-400 max-w-2xl leading-relaxed">
          Evines includes a complete subscription system. You need to link your
          Stripe products to the definitions in the application configuration.
        </p>
      </div>

      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <StepIcon icon={Settings} />
          <h2 className="text-2xl font-bold tracking-tight">1. API Keys</h2>
        </div>
        <p className="text-sm text-zinc-500">
          Get your keys from the{" "}
          <a
            href="https://dashboard.stripe.com/test/apikeys"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-300 underline font-bold"
          >
            Stripe Dashboard
          </a>{" "}
          and add them to your <code className="text-zinc-300">.env</code>:
        </p>
        <div className="p-4 bg-zinc-950 border border-zinc-900 rounded-xl font-mono text-[11px] text-zinc-400 space-y-2">
          <p>STRIPE_SECRET_KEY=&quot;sk_test_...&quot;</p>
          <p>NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=&quot;pk_test_...&quot;</p>
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <StepIcon icon={Zap} />
          <h2 className="text-2xl font-bold tracking-tight">
            2. Products & Config File
          </h2>
        </div>

        <div className="space-y-4">
          <p className="text-sm text-zinc-500 leading-relaxed">
            Create your products (Pro & Elite) in Stripe with monthly and yearly
            prices. Copy the **Price IDs** (e.g.,{" "}
            <code className="text-zinc-300">price_...</code>) into your{" "}
            <code className="text-zinc-300">.env</code>.
          </p>

          <div className="p-4 rounded-xl bg-blue-500/5 border border-blue-500/20 flex gap-4 items-start text-blue-400">
            <Info className="w-5 h-5 shrink-0 mt-0.5" />
            <p className="text-xs leading-relaxed">
              Names, descriptions, and features displayed on the Pricing page
              are customizable in:
              <code className="bg-blue-500/10 px-1 rounded ml-1 text-zinc-200">
                config/plans.ts
              </code>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <StepIcon icon={Terminal} />
          <h2 className="text-2xl font-bold tracking-tight">
            3. Webhooks (Local Dev)
          </h2>
        </div>

        <p className="text-sm text-zinc-500 leading-relaxed">
          To update your database upon payment, you must listen to Stripe
          events. Use the{" "}
          <a
            href="https://stripe.com/docs/stripe-cli"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-300 underline font-bold"
          >
            Stripe CLI
          </a>
          :
        </p>

        <div className="p-3 bg-black border border-zinc-800 rounded-lg font-mono text-sm text-emerald-500">
          stripe listen --forward-to localhost:3000/api/webhook/stripe
        </div>

        <p className="text-xs text-zinc-600 italic">
          Note: Use <code className="text-zinc-400">/webhook/stripe</code>{" "}
          (singular). Copy the <code className="text-zinc-400">whsec_...</code>{" "}
          key into <code className="text-zinc-300">STRIPE_WEBHOOK_SECRET</code>.
        </p>
      </section>

      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <StepIcon icon={CreditCard} />
          <h2 className="text-2xl font-bold tracking-tight italic">
            4. Customer Portal Configuration
          </h2>
        </div>

        <div className="p-6 rounded-2xl border border-zinc-900 bg-zinc-950/50 space-y-4">
          <p className="text-sm text-zinc-400 leading-relaxed">
            In your Stripe{" "}
            <a
              href="https://dashboard.stripe.com/test/settings/billing/portal"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Billing Portal settings
            </a>
            , ensure you enable:
          </p>
          <ul className="space-y-3">
            <li className="flex items-center gap-3 text-xs text-zinc-500">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>
                <strong>Switch plans:</strong> Allow customers to
                upgrade/downgrade between Pro and Elite.
              </span>
            </li>
            <li className="flex items-center gap-3 text-xs text-zinc-500">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>
                <strong>Cancel subscriptions:</strong> Set to &quot;Cancel
                immediately&quot;.
              </span>
            </li>
          </ul>
        </div>
      </section>

      <div className="pt-8 border-t border-zinc-900">
        <div className="p-8 rounded-3xl bg-emerald-500 text-black flex items-center justify-between shadow-[0_0_50px_-10px_rgba(16,185,129,0.3)]">
          <div className="space-y-1 text-black">
            <h3 className="text-2xl font-bold tracking-tighter italic">
              Mission Accomplished!
            </h3>
            <p className="text-sm font-medium opacity-80 uppercase tracking-widest">
              Your SaaS is now production-ready.
            </p>
          </div>
          <Zap className="w-10 h-10 text-black/40 fill-black/20" />
        </div>
        <div className="flex items-center justify-center gap-2 mt-6 text-zinc-600">
          <AlertCircle className="w-4 h-4" />
          <p className="text-xs italic text-center">
            You can now customize the UI and build your unique features.
          </p>
        </div>
      </div>
    </div>
  );
}
