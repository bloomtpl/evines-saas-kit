import { AlertTriangle, Database, Info, Link as LinkIcon } from "lucide-react";

export default function DatabaseDoc() {
  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <h1 className="text-5xl font-bold tracking-tighter">
          Database Setup <span className="text-zinc-800">.</span>
        </h1>
        <p className="text-lg text-zinc-400 max-w-2xl">
          By default, Evines is optimized for **PostgreSQL** with Prisma.
          However, the kit is provider-agnostic, meaning you can easily switch
          to MySQL, SQLite, or MongoDB.
        </p>
        <a
          href="https://www.prisma.io/docs/guides/nextjs"
          target="_blank"
          className="inline-flex items-center gap-2 text-sm text-emerald-500 hover:underline font-medium"
        >
          <LinkIcon className="w-4 h-4" />
          Official Prisma + Next.js Guide
        </a>
      </div>

      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-zinc-900 flex items-center justify-center text-zinc-200 font-bold text-xs border border-zinc-800">
            1
          </div>
          <h2 className="text-2xl font-bold tracking-tight">
            Initialize Prisma
          </h2>
        </div>

        <p className="text-zinc-500 text-sm">
          Run the initialization command. You will be prompted to log in to
          Prisma, select a server region, and name your project.
        </p>

        <div className="p-4 bg-black border border-zinc-800 rounded-xl font-mono text-sm text-emerald-500">
          npx prisma init --db
        </div>

        <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 space-y-3">
          <div className="flex items-center gap-2 text-zinc-200 text-sm font-bold">
            <Info className="w-4 h-4 text-blue-400" />
            Post-Initialization
          </div>
          <p className="text-xs text-zinc-500 leading-relaxed">
            After the command finishes, specific instructions and your
            **Database URL** will appear in your terminal. Copy this URL
            immediately.
          </p>
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-zinc-900 flex items-center justify-center text-zinc-200 font-bold text-xs border border-zinc-800">
            2
          </div>
          <h2 className="text-2xl font-bold tracking-tight">
            Configure .env.local
          </h2>
        </div>

        <p className="text-zinc-500 text-sm">
          Paste your Database URL into your{" "}
          <code className="text-zinc-300">.env</code> file.
        </p>

        <div className="p-4 bg-zinc-950 border border-zinc-900 rounded-xl font-mono text-xs text-zinc-400">
          <span className="text-zinc-600">
            # Important: Ensure the SSL mode is present at the end
          </span>
          <br />
          DATABASE_URL=&quot;postgres://user:password@host:port/dbname
          <span className="text-emerald-500 font-bold">?sslmode=require</span>
          &quot;
        </div>

        <div className="p-4 rounded-xl bg-amber-500/5 border border-amber-500/20 flex gap-4">
          <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0" />
          <p className="text-xs text-amber-500/80 leading-relaxed font-medium">
            Double-check your URL. If you are using a cloud provider like Neon
            or Supabase, omitting{" "}
            <code className="bg-amber-500/10 px-1 rounded">
              ?sslmode=require
            </code>{" "}
            will likely cause connection timeouts.
          </p>
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-zinc-900 flex items-center justify-center text-zinc-200 font-bold text-xs border border-zinc-800">
            3
          </div>
          <h2 className="text-2xl font-bold tracking-tight">Sync & Generate</h2>
        </div>

        <p className="text-zinc-500 text-sm">
          Once your URL is set, push the schema to your database and generate
          the Prisma Client.
        </p>

        <div className="space-y-3">
          <div className="group">
            <p className="text-[10px] text-zinc-600 font-mono uppercase mb-1">
              Push schema to DB
            </p>
            <div className="p-3 bg-black border border-zinc-800 rounded-lg font-mono text-sm text-zinc-300">
              npx prisma migrate dev
            </div>
          </div>
          <div className="group">
            <p className="text-[10px] text-zinc-600 font-mono uppercase mb-1">
              Generate local types
            </p>
            <div className="p-3 bg-black border border-zinc-800 rounded-lg font-mono text-sm text-zinc-300">
              npx prisma generate
            </div>
          </div>
        </div>
      </section>

      <div className="p-8 rounded-3xl border border-zinc-900 bg-zinc-950 flex flex-col items-center text-center space-y-4">
        <div className="p-4 rounded-full bg-emerald-500/10 text-emerald-500">
          <Database className="w-8 h-8" />
        </div>
        <h3 className="text-lg font-bold text-zinc-200 tracking-tight">
          Visualize your data
        </h3>
        <p className="text-sm text-zinc-500 max-w-sm">
          Run Prisma Studio to open a visual editor in your browser and manage
          your records effortlessly.
        </p>
        <code className="px-4 py-2 bg-zinc-900 rounded-lg text-emerald-500 font-mono text-sm border border-zinc-800">
          npx prisma studio
        </code>
      </div>
    </div>
  );
}
