import { BlogPost } from "@/types";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function PostHeader({ post }: { post: BlogPost }) {
  const titleWords = post.title.split(" ");
  const lastWord = titleWords.pop();
  const mainTitle = titleWords.join(" ");

  return (
    <div className="mb-16">
      <div className="flex items-center justify-between mb-16">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-zinc-500 hover:text-white font-mono text-[10px] uppercase tracking-[0.2em] transition-all group"
        >
          <ArrowLeft
            size={14}
            className="group-hover:-translate-x-1 transition-transform"
          />
          Back to lab
        </Link>
        <button className="text-zinc-500 hover:text-violet-400 transition-colors">
          <Share2 size={18} />
        </button>
      </div>

      <div className="space-y-8">
        <div className="flex items-center gap-6 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">
          <div className="flex items-center gap-2">
            <Calendar size={12} className="text-violet-500" />
            {post.date}
          </div>
          <div className="flex items-center gap-2">
            <Clock size={12} />5 min read
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter italic leading-[0.9] text-white">
          {mainTitle}{" "}
          <span className="text-zinc-700 font-medium NOT-italic">
            {lastWord}.
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-zinc-400 leading-relaxed font-medium max-w-2xl">
          {post.description}
        </p>
      </div>

      {post.image && (
        <div className="relative aspect-video w-full mt-20 rounded-[2.5rem] overflow-hidden border border-zinc-800 shadow-2xl">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      )}
    </div>
  );
}
