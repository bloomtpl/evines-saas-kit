import {
  Component,
  Layers,
  LucideProps,
  Paintbrush,
  Palette,
  Type,
} from "lucide-react";

const CustomIcon = ({
  icon: Icon,
}: {
  icon: React.ComponentType<LucideProps>;
}) => (
  <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400">
    <Icon className="w-5 h-5" />
  </div>
);

export default function CustomizationDoc() {
  return (
    <div className="space-y-12 text-white">
      <div className="space-y-4">
        <h1 className="text-5xl font-bold tracking-tighter italic">
          Customization{" "}
          <span className="text-zinc-800 NOT-italic text-2xl">.</span>
        </h1>
        <p className="text-lg text-zinc-400 max-w-2xl leading-relaxed">
          Evines is built to be flexible. Follow this guide to change the
          branding, styling, and core components of your new SaaS.
        </p>
      </div>

      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <CustomIcon icon={Paintbrush} />
          <h2 className="text-2xl font-bold tracking-tight">
            Theming & Colors
          </h2>
        </div>
        <p className="text-sm text-zinc-500 leading-relaxed">
          We use **Tailwind CSS v4**. All global styles, including the dark-mode
          palette and brand colors, are defined in the CSS variables.
        </p>
        <div className="p-4 bg-zinc-950 border border-zinc-900 rounded-xl space-y-2">
          <p className="text-[10px] text-zinc-600 font-mono uppercase mb-1">
            {"// Edit global styles in:"}
          </p>
          <code className="text-emerald-500 text-sm font-mono">
            app/globals.css
          </code>
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <CustomIcon icon={Type} />
          <h2 className="text-2xl font-bold tracking-tight">Typography</h2>
        </div>
        <p className="text-sm text-zinc-500 leading-relaxed">
          The project uses **Geist** and **Geist Mono** by default. To change
          fonts, update the font configuration in:
        </p>
        <div className="p-4 bg-zinc-950 border border-zinc-900 rounded-xl">
          <code className="text-emerald-500 text-sm font-mono">
            app/layout.tsx
          </code>
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <CustomIcon icon={Component} />
          <h2 className="text-2xl font-bold tracking-tight">UI Components</h2>
        </div>
        <p className="text-sm text-zinc-500 leading-relaxed">
          We use **Shadcn UI**. These components are located in
          <code className="text-zinc-300 mx-1 font-mono">
            src/components/ui
          </code>
          . You can modify their JSX and Tailwind classes directly.
        </p>
      </section>

      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <CustomIcon icon={Layers} />
          <h2 className="text-2xl font-bold tracking-tight">
            Project Structure
          </h2>
        </div>
        <div className="p-6 rounded-2xl border border-zinc-900 bg-zinc-950 font-mono text-[11px] text-zinc-400 space-y-2">
          <div className="flex gap-2 pl-4">
            <span className="text-emerald-500">app/</span>
            <span className="text-zinc-700 italic">
              {"// Routes, Layouts & Server Actions"}
            </span>
          </div>
          <div className="flex gap-2 pl-4">
            <span className="text-emerald-500">components/</span>
            <span className="text-zinc-700 italic">
              {"// UI & Shared Components"}
            </span>
          </div>
          <div className="flex gap-2 pl-4">
            <span className="text-emerald-500">config/</span>
            <span className="text-zinc-700 italic">{"// Stripe plans"}</span>
          </div>
          <div className="flex gap-2 pl-4">
            <span className="text-emerald-500">lib/</span>
            <span className="text-zinc-700 italic">
              {"// Prisma, Stripe & Utils"}
            </span>
          </div>
        </div>
      </section>

      <div className="pt-8 border-t border-zinc-900 text-center">
        <div className="inline-flex items-center justify-center p-4 rounded-full bg-white/5 text-white mb-6">
          <Palette className="w-10 h-10" />
        </div>
        <h3 className="text-3xl font-bold tracking-tighter italic mb-4">
          Happy Building!
        </h3>
        <p className="text-zinc-500 text-sm max-w-sm mx-auto italic mb-8">
          You now have all the tools to build a world-class SaaS. We can&apos;t
          wait to see what you create with Evines.
        </p>
      </div>
    </div>
  );
}
