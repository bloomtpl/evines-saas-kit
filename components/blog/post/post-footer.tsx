import Link from "next/link";

export function PostFooter() {
  return (
    <div className="mt-32 pt-12 border-t border-zinc-900">
      <div className="bg-zinc-900/30 border border-zinc-800 rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-2 text-center md:text-left">
          <h4 className="text-xl font-bold italic text-white">
            Enjoyed the deep dive?
          </h4>
          <p className="text-zinc-500 text-sm">
            Join 2,000+ engineers receiving our monthly lab updates.
          </p>
        </div>
        <Link
          href="/subscribe"
          className="bg-white text-black px-8 py-4 rounded-2xl font-bold text-sm uppercase tracking-tighter hover:bg-zinc-200 transition-colors shrink-0"
        >
          Subscribe
        </Link>
      </div>
    </div>
  );
}
