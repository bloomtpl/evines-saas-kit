export function BlogHeader() {
  return (
    <div className="flex flex-col items-center text-center mb-20 space-y-4">
      <div className="flex items-center justify-center gap-2 text-zinc-500 font-mono text-[10px] tracking-[0.3em] uppercase">
        <span className="w-8 h-[1px] bg-zinc-800" />
        Engineering Journal
        <span className="w-8 h-[1px] bg-zinc-800" />
      </div>
      <h1 className="text-5xl md:text-7xl font-bold tracking-tighter italic">
        Latest from the{" "}
        <span className="text-zinc-700 font-medium NOT-italic">lab.</span>
      </h1>
    </div>
  );
}
