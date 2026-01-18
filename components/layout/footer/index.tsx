"use client";

import Logo from "@/components/ui/logo";
import Link from "next/link";
import { SiDiscord, SiGithub, SiX } from "react-icons/si";

const footerLinks = {
  product: [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
  ],
  company: [
    { name: "About", href: "/" },
    { name: "Privacy Policy", href: "/" },
    { name: "Terms of Service", href: "/" },
  ],
  resources: [
    { name: "Documentation", href: "/docs" },
    { name: "Support", href: "/" },
    { name: "Blog", href: "/blog" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-900 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-4 space-y-6">
            <Logo />
            <p className="text-zinc-500 text-sm max-w-xs leading-relaxed">
              The ultimate SaaS boilerplate to build, launch, and scale your
              next big idea in record time.
            </p>
            <div className="flex items-center gap-4 text-zinc-600">
              <Link
                href="#"
                aria-label="X Link"
                className="hover:text-white transition-colors"
              >
                <SiX className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                aria-label="GitHub Link"
                className="hover:text-white transition-colors"
              >
                <SiGithub className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                aria-label="Discord Link"
                className="hover:text-white transition-colors"
              >
                <SiDiscord className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div className="md:col-span-8 grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-bold text-sm mb-6">Product</h3>
              <ul className="space-y-4">
                {footerLinks.product.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-zinc-500 hover:text-white text-sm transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold text-sm mb-6">Company</h3>
              <ul className="space-y-4">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-zinc-500 hover:text-white text-sm transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold text-sm mb-6">Resources</h3>
              <ul className="space-y-4">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-zinc-500 hover:text-white text-sm transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 lg:col-span-1">
              <h3 className="text-white font-bold text-sm mb-6">Newsletter</h3>
              <p className="text-zinc-500 text-xs mb-4 leading-relaxed">
                Stay updated with new features and updates.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Email"
                  className="bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 text-xs w-full focus:outline-none focus:border-zinc-500 transition-colors"
                />
                <button className="bg-white text-black text-[10px] font-bold px-3 py-2 rounded-lg hover:bg-zinc-200 transition-colors uppercase tracking-widest">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-600 text-[10px] font-mono uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} EVINES. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-zinc-600 text-[10px] font-mono uppercase tracking-widest">
                All systems operational
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
