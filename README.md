# 🚀 Evines — Premium Next.js SaaS Starter Kit

Thank you for choosing **Evines**, a high-end boilerplate from [bloomtpl.com](https://bloomtpl.com). This template is engineered for excellence, handling the "boring stuff" (Auth, Billing, DB) so you can focus on building your vision.

## 🛠 Tech Stack (Latest Versions)

- **Framework:** Next.js 16.1 (App Router)
- **Library:** React 19 (Actions & New Hooks)
- **Styling:** Tailwind CSS v4 (Next-gen engine)
- **Database:** Prisma (Type-safe ORM)
- **Auth:** Auth.js v5 (Secure & Lightweight)
- **Payments:** Stripe (Pre-configured PRO & ELITE tiers)

## ⚡ Quick Start

### 1. Installation & Init

```bash
# Install dependencies
npm install

# Create environment file
cp .env.example .env

# Generate Auth Secret
npx auth secret
```

### 2. Database Sync

Update your `DATABASE_URL` in `.env`, then run:

```bash
npx prisma db push
npx prisma generate
```

## 🗺 Setup Roadmap

To ensure a seamless launch, follow the configuration in this specific order:

### 1. Stripe Integration

Create your products (Pro & Elite) in Stripe. Map the Price IDs to your `.env`:

```bash
NEXT_PUBLIC_STRIPE_PRICE_PRO_MONTHLY="price_..."
NEXT_PUBLIC_STRIPE_PRICE_PRO_YEARLY="price_..."
# ... same for ELITE
```

### 2. Email Setup (Resend)

Configure Resend for transactional emails (Magic Links, Welcomes).

```bash
RESEND_API_KEY="re_..."
```

## 📖 Full Documentation

Need more details? Explore the complete documentation to master every part of the kit:

- 📘 **Introduction** — Overview of architecture and features
- 🚀 **Getting Started** — Step-by-step installation guide
- 🗄️ **Database Setup** — PostgreSQL & Prisma configuration
- 🔑 **Authentication** — Social logins & Magic Links
- 💳 **Stripe Guide** — Handling subscriptions & Webhooks

## 🛠️ Commands Reference

| Command             | Action                                          |
| ------------------- | ----------------------------------------------- |
| `npm run dev`       | Starts the development server at localhost:3000 |
| `npm run build`     | Creates an optimized production build           |
| `npx prisma studio` | Opens a visual editor for your database         |
| `stripe listen`     | Forwards Stripe webhooks to your local machine  |

## Support & Updates

Maintained with ❤️ by **Bloomtpl**. For updates or technical support, visit [bloomtpl.com](https://bloomtpl.com).
