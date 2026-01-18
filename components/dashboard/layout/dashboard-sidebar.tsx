import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import Logo from "@/components/ui/logo";
import {
  LogOut,
  LayoutDashboard,
  Zap,
  Users,
  CreditCard,
  Settings,
} from "lucide-react";

export const navigation = [
  { name: "Overview", href: "/dashboard", icon: LayoutDashboard },
  { name: "Projects", href: "/dashboard/projects", icon: Zap },
  { name: "Team", href: "/dashboard/team", icon: Users },
  { name: "Billing", href: "/dashboard/billing", icon: CreditCard },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
];

export function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex flex-col w-64 border-r border-zinc-900 bg-zinc-950/50">
      <div className="p-6 text-white">
        <Logo />
      </div>
      <nav className="flex-1 px-4 space-y-1 mt-4">
        {navigation.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all group ${
                isActive
                  ? "bg-zinc-900 text-white"
                  : "text-zinc-500 hover:text-white hover:bg-zinc-900/50"
              }`}
            >
              <item.icon
                className={`w-4 h-4 ${
                  isActive
                    ? "text-white"
                    : "text-zinc-600 group-hover:text-white"
                }`}
              />
              {item.name}
            </Link>
          );
        })}
      </nav>
      <div className="p-4 border-t border-zinc-900">
        <button
          onClick={() => signOut({ callbackUrl: "/" })}
          className="flex items-center gap-3 px-3 py-2 w-full rounded-lg text-sm font-medium text-zinc-500 hover:text-red-400 hover:bg-red-400/5 transition-all group"
        >
          <LogOut className="w-4 h-4 text-zinc-600 group-hover:text-red-400" />
          Logout
        </button>
      </div>
    </aside>
  );
}
