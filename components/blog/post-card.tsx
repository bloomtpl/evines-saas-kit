import { BlogPost } from "@/types";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function PostCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col bg-zinc-900/20 border border-zinc-800 rounded-[2rem] overflow-hidden hover:bg-zinc-900/40 hover:border-zinc-700 transition-all duration-300"
    >
      <div className="aspect-[16/10] relative overflow-hidden border-b border-zinc-800">
        {post.image ? (
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full bg-zinc-900" />
        )}
      </div>

      <div className="p-8 flex flex-col flex-1">
        <div className="flex items-center justify-between mb-6">
          <span className="text-zinc-600 font-mono text-[10px] uppercase tracking-widest">
            {post.date}
          </span>
          <ArrowUpRight
            size={14}
            className="text-zinc-800 group-hover:text-violet-500 transition-colors"
          />
        </div>

        <div className="flex-1 space-y-3">
          <h3 className="text-xl font-bold tracking-tight italic group-hover:text-violet-400 transition-colors line-clamp-2">
            {post.title}
          </h3>
          <p className="text-zinc-500 text-xs leading-relaxed line-clamp-2">
            {post.description}
          </p>
        </div>

        <div className="mt-8 pt-6 border-t border-zinc-900 flex items-center justify-between">
          <span className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest font-bold">
            Read Post
          </span>
          <ArrowRight
            size={14}
            className="text-zinc-800 group-hover:text-violet-500 transition-colors"
          />
        </div>
      </div>
    </Link>
  );
}
