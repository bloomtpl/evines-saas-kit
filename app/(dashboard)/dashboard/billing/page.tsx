import { auth } from "@/auth";
import { PlanFeatures } from "@/components/dashboard/billing/plan-features";
import { PlanSummary } from "@/components/dashboard/billing/plan-summary";
import { PLANS } from "@/config/plans";
import prisma from "@/lib/prisma";

export default async function BillingPage() {
  const session = await auth();

  const user = await prisma.user.findUnique({
    where: { id: session?.user?.id },
    select: {
      plan: true,
      stripePriceId: true,
      stripeCurrentPeriodEnd: true,
      stripeCancelAtPeriodEnd: true,
    },
  });

  const currentPlanConfig = PLANS.find(
    (p) =>
      p.priceIds.monthly === user?.stripePriceId ||
      p.priceIds.yearly === user?.stripePriceId,
  );

  const isYearly = currentPlanConfig?.priceIds.yearly === user?.stripePriceId;

  const planName = currentPlanConfig
    ? currentPlanConfig.name.toUpperCase()
    : "FREE";

  const currentPrice = currentPlanConfig
    ? isYearly
      ? currentPlanConfig.yearlyPrice
      : currentPlanConfig.monthlyPrice
    : 0;

  return (
    <div className="max-w-4xl space-y-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tighter italic">
          Billing <span className="text-zinc-800 NOT-italic text-2xl">.</span>
        </h1>
        <p className="text-zinc-500 text-sm mt-1">
          Manage your subscription and payment methods.
        </p>
      </div>

      <div className="space-y-6">
        <PlanSummary
          plan={planName}
          price={currentPrice}
          isYearly={isYearly}
          expiryDate={user?.stripeCurrentPeriodEnd}
          isCancelled={user?.stripeCancelAtPeriodEnd}
        />

        <div className="pt-4">
          <h3 className="text-xs font-mono text-zinc-600 uppercase tracking-[0.2em] mb-4">
            Included in your plan
          </h3>
          <PlanFeatures />
        </div>
      </div>

      <p className="text-[11px] text-zinc-600 max-w-md leading-relaxed">
        Payments are processed securely via Stripe. You can cancel your
        subscription at any time. For custom enterprise plans, please{" "}
        <span className="text-zinc-400 underline cursor-pointer">
          contact us
        </span>
        .
      </p>
    </div>
  );
}
