"use client";

import { ReactNode, useState } from "react";
import { Menu } from "lucide-react";
import Logo from "@/components/ui/logo";
import { DashboardSidebar } from "./dashboard-sidebar";
import { MobileNav } from "./mobile-nav";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex h-screen bg-black overflow-hidden text-white">
      <DashboardSidebar />

      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <header className="md:hidden flex items-center justify-between p-4 border-b border-zinc-900 bg-black">
          <Logo />
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="p-2 text-zinc-400"
          >
            <Menu className="w-6 h-6" />
          </button>
        </header>

        <main className="flex-1 overflow-y-auto relative">
          <div className="max-w-7xl mx-auto p-6 md:p-10">{children}</div>
        </main>
      </div>

      <MobileNav
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </div>
  );
}
