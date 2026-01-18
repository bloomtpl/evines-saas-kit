"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Alex Rivera",
    role: "Founder at TechFlow",
    content:
      "This boilerplate saved us at least 2 months of work. The Stripe and Auth integration is just flawless. Highly recommended.",
    avatar: "https://i.pravatar.cc/150?u=alex",
  },
  {
    name: "Sarah Chen",
    role: "SaaS Developer",
    content:
      "The DX (Developer Experience) is insane. Everything is typed, the components are beautiful, and the structure makes sense.",
    avatar: "https://i.pravatar.cc/150?u=sarah",
  },
  {
    name: "James Wilson",
    role: "Indie Hacker",
    content:
      "Finally a template that isn't bloated. Clean code, fast performance, and a design that actually converts users.",
    avatar: "https://i.pravatar.cc/150?u=james",
  },
  {
    name: "Elena Rossi",
    role: "Product Manager",
    content:
      "We launched our MVP in 3 days. The UI kit alone is worth the price. It's a game changer for rapid shipping.",
    avatar: "https://i.pravatar.cc/150?u=elena",
  },
  {
    name: "Marcus Thorne",
    role: "CTO at ShipIt",
    content:
      "The best investment I've made this year. The security features and database schema are professionally architected.",
    avatar: "https://i.pravatar.cc/150?u=marcus",
  },
  {
    name: "Lila Vance",
    role: "Serial Entrepreneur",
    content:
      "Zero friction from setup to production. This is how modern web development should feel like. Highly recommended.",
    avatar: "https://i.pravatar.cc/150?u=lila",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-32 bg-black text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-20 space-y-4">
          <div className="flex items-center gap-2 text-zinc-500 font-mono text-xs tracking-[0.3em] uppercase">
            <span className="w-12 h-[1px] bg-zinc-800" />
            Social Proof
            <span className="w-12 h-[1px] bg-zinc-800" />
          </div>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">
            Trusted by <span className="text-zinc-700 italic">builders.</span>
          </h2>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="break-inside-avoid p-8 rounded-3xl border border-zinc-900 bg-zinc-950/50 hover:bg-zinc-900/30 transition-all duration-300 group"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, star) => (
                  <Star key={star} className="w-3 h-3 fill-white text-white" />
                ))}
              </div>

              <p className="text-zinc-400 text-sm leading-relaxed italic mb-8">
                &quot;{t.content}&quot;
              </p>

              <div className="flex items-center gap-4">
                <Avatar className="w-10 h-10 grayscale group-hover:grayscale-0 transition-all duration-500">
                  <AvatarImage
                    src={t.avatar}
                    alt={t.name}
                    className="object-cover"
                  />
                  <AvatarFallback className="bg-zinc-800 text-[10px] text-zinc-400">
                    {t.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-sm font-bold tracking-tight text-white">
                    {t.name}
                  </h3>
                  <p className="text-[10px] text-zinc-600 uppercase tracking-widest font-mono">
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 py-8 border-y border-zinc-900 flex flex-wrap justify-center items-center gap-12 opacity-30 grayscale">
          {["TECHFLOW", "SHIPIT", "DESIGN.CO", "VANCE STUDIO"].map((brand) => (
            <span
              key={brand}
              className="font-bold text-xl tracking-tighter italic"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
