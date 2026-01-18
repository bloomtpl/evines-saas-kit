import { auth } from "@/auth";
import { PricingSection } from "@/components/billing/pricing-section";
import FAQ from "@/components/marketing/faq";
import Features from "@/components/marketing/features";
import FinalCTA from "@/components/marketing/final-cta";
import HeroSection from "@/components/marketing/hero";
import SocialProof from "@/components/marketing/social-proof";
import Stack from "@/components/marketing/stack";
import Testimonials from "@/components/marketing/testimonials";
import prisma from "@/lib/prisma";

export default async function HomePage() {
  const session = await auth();

  let currentPlan = "FREE";

  if (session?.user?.id) {
    const user = await prisma.user.findUnique({
      where: { id: session.user.id },
      select: { plan: true },
    });
    currentPlan = user?.plan || "FREE";
  }

  return (
    <main className="relative min-h-screen overflow-hidden">
      <HeroSection />

      <SocialProof />

      <Features />

      <Stack />

      <PricingSection currentPlan={currentPlan} />

      <Testimonials />

      <FAQ />

      <FinalCTA />
    </main>
  );
}
