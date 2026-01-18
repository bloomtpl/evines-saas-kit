import {
  sendCancellationEmail,
  sendPaymentConfirmationEmail,
  sendPlanUpdateEmail,
} from "@/lib/mail";
import prisma from "@/lib/prisma";
import { stripe } from "@/lib/stripe";
import { headers } from "next/headers";
import Stripe from "stripe";

interface StripeSubscriptionFixed extends Stripe.Subscription {
  current_period_end: number;
}

interface StripeInvoiceFixed extends Stripe.Invoice {
  subscription: string | null;
}

function getPlanFromPriceId(priceId: string): "PRO" | "ELITE" | "FREE" {
  if (
    priceId === process.env.NEXT_PUBLIC_STRIPE_PRICE_PRO_MONTHLY ||
    priceId === process.env.NEXT_PUBLIC_STRIPE_PRICE_PRO_YEARLY
  ) {
    return "PRO";
  }
  if (
    priceId === process.env.NEXT_PUBLIC_STRIPE_PRICE_ELITE_MONTHLY ||
    priceId === process.env.NEXT_PUBLIC_STRIPE_PRICE_ELITE_YEARLY
  ) {
    return "ELITE";
  }
  return "FREE";
}

export async function POST(req: Request) {
  const body = await req.text();
  const signature = (await headers()).get("Stripe-Signature");

  if (!signature) return new Response("No signature found", { status: 400 });

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!,
    );
  } catch {
    return new Response("Webhook Error", { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    const userId = session.client_reference_id;
    const subscriptionId = session.subscription as string;

    if (!userId || !subscriptionId)
      return new Response("Data missing", { status: 200 });

    try {
      const subscription = (await stripe.subscriptions.retrieve(
        subscriptionId,
      )) as unknown as StripeSubscriptionFixed;

      const subscriptionItem = subscription.items.data[0];
      const rawTimestamp =
        subscriptionItem?.current_period_end || subscription.current_period_end;

      if (!rawTimestamp) {
        throw new Error("Unable to retrieve the end date of the period");
      }

      const exactPeriodEnd = new Date(rawTimestamp * 1000);

      const planName = getPlanFromPriceId(subscriptionItem.price.id);

      await prisma.user.update({
        where: { id: userId },
        data: {
          stripeSubscriptionId: subscription.id,
          stripeCustomerId: session.customer as string,
          stripePriceId: subscriptionItem.price.id,
          stripeCurrentPeriodEnd: exactPeriodEnd,
          plan: planName,
        },
      });
      const userEmail = session.customer_details?.email;
      if (userEmail) {
        await sendPaymentConfirmationEmail(userEmail, planName);
      }
    } catch (error) {
      console.error("❌ Checkout Error:", error);
      return new Response("Error", { status: 500 });
    }
  }

  if (event.type === "customer.subscription.updated") {
    const subscription = event.data
      .object as unknown as StripeSubscriptionFixed;

    try {
      const subscriptionItem = subscription.items.data[0];
      const rawTimestamp =
        subscriptionItem?.current_period_end || subscription.current_period_end;

      if (rawTimestamp) {
        const exactPeriodEnd = new Date(rawTimestamp * 1000);
        const newPlan = getPlanFromPriceId(subscriptionItem.price.id);

        const updatedUser = await prisma.user.update({
          where: { stripeSubscriptionId: subscription.id },
          data: {
            stripePriceId: subscriptionItem.price.id,
            stripeCurrentPeriodEnd: exactPeriodEnd,
            plan: newPlan,
          },
        });

        if (updatedUser.email) {
          await sendPlanUpdateEmail(updatedUser.email, newPlan);
        }
      }
    } catch (error) {
      console.error("❌ Update Subscription Error:", error);
    }
  }

  if (event.type === "invoice.payment_succeeded") {
    const invoice = event.data.object as unknown as StripeInvoiceFixed;
    const subId = invoice.subscription;

    if (subId) {
      try {
        const subscription = (await stripe.subscriptions.retrieve(
          subId,
        )) as unknown as StripeSubscriptionFixed;

        const subscriptionItem = subscription.items.data[0];
        const rawTimestamp =
          subscriptionItem?.current_period_end ||
          subscription.current_period_end;

        if (rawTimestamp) {
          const exactPeriodEnd = new Date(rawTimestamp * 1000);
          await prisma.user.update({
            where: { stripeSubscriptionId: subscription.id },
            data: {
              stripePriceId: subscriptionItem.price.id,
              stripeCurrentPeriodEnd: exactPeriodEnd,
            },
          });
        }
      } catch (error) {
        console.error("❌ Renewal Error:", error);
      }
    }
  }

  if (event.type === "customer.subscription.deleted") {
    const subscription = event.data.object as Stripe.Subscription;
    const stripeCustomerId = subscription.customer as string;

    try {
      await prisma.user.updateMany({
        where: { stripeCustomerId: stripeCustomerId },
        data: {
          plan: "FREE",
          stripeSubscriptionId: null,
          stripePriceId: null,
        },
      });

      const user = await prisma.user.findFirst({
        where: { stripeCustomerId: stripeCustomerId },
      });
      if (user?.email) {
        await sendCancellationEmail(user.email);
      }
    } catch (error) {
      console.error("❌ Error during Prisma termination :", error);
    }
  }

  return new Response(null, { status: 200 });
}
