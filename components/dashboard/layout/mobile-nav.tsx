import Logo from "@/components/ui/logo";
import { X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "./dashboard-sidebar";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const pathname = usePathname();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden flex">
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={onClose}
      />

      <div className="relative w-full max-w-[280px] bg-zinc-950 border-r border-zinc-900 flex flex-col p-6 shadow-2xl animate-in slide-in-from-left duration-300">
        <div className="flex items-center justify-between mb-10">
          <Logo />
          <button
            onClick={onClose}
            className="p-2 -mr-2 text-zinc-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="space-y-2 flex-1">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={onClose}
                className={`flex items-center gap-4 px-4 py-3 rounded-2xl text-base font-medium transition-all ${
                  isActive
                    ? "bg-zinc-900 text-white shadow-[0_0_20px_rgba(0,0,0,0.5)]"
                    : "text-zinc-500 hover:text-zinc-200"
                }`}
              >
                <item.icon
                  className={`w-5 h-5 ${
                    isActive ? "text-violet-500" : "text-zinc-600"
                  }`}
                />
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto pt-6 border-t border-zinc-900">
          <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.2em]">
            Evines v1.0.4 — 2026
          </p>
        </div>
      </div>
    </div>
  );
}
