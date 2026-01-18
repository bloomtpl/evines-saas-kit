import { auth } from "@/auth";
import prisma from "@/lib/prisma";
import { stripe } from "@/lib/stripe";
import { NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(req: Request) {
  try {
    const sessionAuth = await auth();
    const userId = sessionAuth?.user?.id;

    if (!userId) {
      return NextResponse.json({ error: "Not authorized" }, { status: 401 });
    }

    const { priceId } = await req.json();

    if (!priceId) {
      return NextResponse.json({ error: "Price ID missing" }, { status: 400 });
    }

    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { stripeCustomerId: true, email: true },
    });

    const sessionOptions: Stripe.Checkout.SessionCreateParams = {
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/pricing`,
      payment_method_types: ["card"],
      mode: "subscription",
      line_items: [{ price: priceId, quantity: 1 }],
      client_reference_id: userId,
      metadata: { userId: userId },
    };

    if (user?.stripeCustomerId) {
      sessionOptions.customer = user.stripeCustomerId;
    } else {
      sessionOptions.customer_email = user?.email || undefined;
    }

    const session = await stripe.checkout.sessions.create(sessionOptions);

    return NextResponse.json({ url: session.url });
  } catch (error: unknown) {
    console.error("STRIPE_ERROR", error);
    return NextResponse.json(
      { error: "Error creating session" },
      { status: 500 },
    );
  }
}
