"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../../ui/button";

interface NavLink {
  label: string;
  href: string;
}

interface MobileMenuProps {
  session: boolean;
  links: NavLink[];
}

export function MobileMenu({ session, links }: MobileMenuProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setOpen(!open)}
        className="text-white hover:bg-zinc-800"
      >
        {open ? <X /> : <Menu />}
      </Button>

      {open && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          <div className="absolute left-0 right-0 top-full mt-4 p-4 z-50">
            <nav className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 shadow-2xl flex flex-col gap-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-lg font-medium text-zinc-400 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <hr className="border-zinc-800" />
              <Link
                href={session ? "/dashboard" : "/signin"}
                onClick={() => setOpen(false)}
                className="text-lg font-bold text-white flex justify-between items-center"
              >
                {session ? "Go to Dashboard" : "Sign in"}
                <span className="text-xs bg-zinc-800 px-2 py-1 rounded-md text-zinc-500 font-mono tracking-tighter">
                  {session ? "ACTIVE" : "GUEST"}
                </span>
              </Link>
            </nav>
          </div>
        </>
      )}
    </div>
  );
}
