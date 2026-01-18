import { BlogPost } from "@/types";
import { ArrowRight, Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface FeaturedPostProps {
  post: BlogPost;
}

export function FeaturedPost({ post }: FeaturedPostProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group relative flex flex-col md:flex-row bg-zinc-900/20 border border-zinc-800 rounded-[2.5rem] overflow-hidden hover:bg-zinc-900/40 transition-all duration-500 mb-12"
    >
      <div className="md:w-3/5 h-[450px] relative overflow-hidden">
        {post.image ? (
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
            priority
          />
        ) : (
          <div className="w-full h-full bg-zinc-900" />
        )}
      </div>

      <div className="md:w-2/5 p-10 md:p-12 flex flex-col justify-center">
        <div className="flex items-center gap-2 text-zinc-600 font-mono text-[10px] uppercase tracking-widest mb-6">
          <Calendar size={12} />
          {post.date}
        </div>
        <h2 className="text-3xl font-bold tracking-tight italic mb-6 group-hover:text-violet-400 transition-colors">
          {post.title}
        </h2>
        <p className="text-zinc-500 text-sm leading-relaxed mb-8 line-clamp-3">
          {post.description}
        </p>
        <div className="flex items-center gap-3 text-[10px] font-mono text-white uppercase tracking-widest font-bold">
          Read Story
          <ArrowRight
            size={14}
            className="text-violet-500 group-hover:translate-x-1 transition-transform"
          />
        </div>
      </div>
    </Link>
  );
}
