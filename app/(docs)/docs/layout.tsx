"use client";

import { cn } from "@/lib/utils";
import { ChevronRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const steps = [
  { group: "Overview", items: [{ title: "Introduction", href: "/docs" }] },
  {
    group: "Configuration",
    items: [
      { title: "1. Getting Started", href: "/docs/getting-started" },
      { title: "2. Database", href: "/docs/database" },
      { title: "3. Authentication", href: "/docs/auth" },
      { title: "4. Stripe Billing", href: "/docs/stripe" },
    ],
  },
  {
    group: "Going Live",
    items: [
      { title: "5. Deployment", href: "/docs/deploy" },
      { title: "Customization", href: "/docs/customization" },
    ],
  },
];

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <div className="flex min-h-screen bg-black text-zinc-200">
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 p-4 bg-white text-black rounded-full md:hidden shadow-2xl active:scale-95 transition-transform"
        aria-label="Toggle Menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-72 border-r border-zinc-900 bg-black p-6 transition-all duration-300 ease-in-out md:translate-x-0 md:static md:block",
          isOpen
            ? "translate-x-0 opacity-100"
            : "-translate-x-full opacity-0 md:opacity-100",
        )}
      >
        <div className="mb-10">
          <Link
            href="/"
            className="font-bold text-xl tracking-tighter text-white"
          >
            EVINES{" "}
            <span className="text-zinc-600 text-[10px] uppercase tracking-widest ml-1 font-medium">
              Docs
            </span>
          </Link>
        </div>

        <nav className="space-y-8">
          {steps.map((group) => (
            <div key={group.group} className="space-y-3">
              <h4 className="px-3 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-600">
                {group.group}
              </h4>
              <div className="space-y-1">
                {group.items.map((step) => {
                  const isActive = pathname === step.href;
                  return (
                    <Link
                      key={step.href}
                      href={step.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "group flex items-center justify-between px-3 py-2.5 rounded-xl text-sm transition-all",
                        isActive
                          ? "bg-zinc-900 text-white font-medium"
                          : "text-zinc-500 hover:text-zinc-300 hover:bg-zinc-900/50",
                      )}
                    >
                      {step.title}
                      {isActive && (
                        <ChevronRight size={14} className="text-emerald-500" />
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>
      </aside>

      <main className="flex-1 w-full relative overflow-x-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/5 blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto p-6 md:p-16 lg:p-24">
          {children}

          <footer className="mt-20 pt-8 border-t border-zinc-900 flex flex-col md:flex-row gap-4 justify-between items-center text-[11px] text-zinc-600">
            <p>© 2026 Evines Starter Kit - Built by Bloomtpl</p>
            <div className="flex gap-6">
              <Link
                href="https://bloomtpl.com/"
                className="hover:text-zinc-400 transition-colors"
              >
                BloomTPL
              </Link>
              <Link
                href="https://github.com/bloomtpl?tab=repositories"
                className="hover:text-zinc-400 transition-colors"
              >
                GitHub
              </Link>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}
