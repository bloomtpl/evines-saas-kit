export const PLANS = [
  {
    id: "pro",
    name: "Pro",
    description: "Perfect for individual creators and builders.",
    monthlyPrice: 19,
    yearlyPrice: 150,
    features: [
      "50 generations / month",
      "Standard email support",
      "Standard platform access",
      "Basic analytics",
    ],
    priceIds: {
      monthly: process.env.NEXT_PUBLIC_STRIPE_PRICE_PRO_MONTHLY!,
      yearly: process.env.NEXT_PUBLIC_STRIPE_PRICE_PRO_YEARLY!,
    },
  },
  {
    id: "elite",
    name: "Elite",
    description: "For professionals who need unlimited power.",
    monthlyPrice: 49,
    yearlyPrice: 390,
    features: [
      "Unlimited generations",
      "Priority 24/7 support",
      "Early access to Beta features",
      "Advanced custom reports",
      "Dedicated account manager",
    ],
    priceIds: {
      monthly: process.env.NEXT_PUBLIC_STRIPE_PRICE_ELITE_MONTHLY!,
      yearly: process.env.NEXT_PUBLIC_STRIPE_PRICE_ELITE_YEARLY!,
    },
  },
];
