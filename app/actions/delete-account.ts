"use server";

import { auth } from "@/auth";
import { sendDeletionEmail } from "@/lib/mail";
import prisma from "@/lib/prisma";
import { stripe } from "@/lib/stripe";
import { redirect } from "next/navigation";

export async function deleteAccount() {
  const session = await auth();
  if (!session?.user?.id) throw new Error("Not authenticated");

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
  });

  if (!user) throw new Error("User not found");

  if (user.stripeSubscriptionId) {
    try {
      await stripe.subscriptions.cancel(user.stripeSubscriptionId);
    } catch (error) {
      console.error("Stripe cancellation error during deletion:", error);
    }
  }

  if (user.email) {
    await sendDeletionEmail(user.email);
  }

  await prisma.user.delete({
    where: { id: user.id },
  });

  redirect("/");
}
