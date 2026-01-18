import { auth } from "@/auth";
import { MobileMenu } from "@/components/layout/header/mobile-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import Link from "next/link";
import Logo from "../../ui/logo";
import AuthButton from "./auth-buttons";

const NAV_LINKS = [
  { label: "Features", href: "/#features" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/#faq" },
  { label: "Docs", href: "/docs" },
];

export default async function Header() {
  const session = await auth();

  return (
    <header className="fixed left-0 w-full z-50 flex justify-center top-8">
      <div className="bg-background/70 backdrop-blur-md rounded-2xl shadow-xl max-w-5xl w-[95vw] flex justify-between items-center py-2 px-4 border border-border">
        <Logo />

        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${navigationMenuTriggerStyle()} bg-transparent`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex gap-2 items-center">
          <AuthButton />

          <MobileMenu session={!!session} links={NAV_LINKS} />
        </div>
      </div>
    </header>
  );
}
