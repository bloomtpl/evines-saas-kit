import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import { ComponentPropsWithoutRef } from "react";

type MdxImageProps = ComponentPropsWithoutRef<"img">;

export function PostContent({ content }: { content: string }) {
  return (
    <div
      className="prose prose-invert max-w-none 
      prose-p:text-zinc-400 prose-p:leading-relaxed prose-p:text-lg prose-p:font-medium
      prose-headings:italic prose-headings:tracking-tighter prose-headings:font-bold
      prose-h2:text-3xl prose-h2:mt-16 prose-h2:mb-6 prose-h2:text-white
      prose-h3:text-xl prose-h3:text-zinc-200
      prose-strong:text-white prose-strong:font-bold
      prose-a:text-violet-400 prose-a:no-underline hover:prose-a:underline
      prose-blockquote:border-l-2 prose-blockquote:border-violet-500 prose-blockquote:bg-zinc-900/30 prose-blockquote:py-2 prose-blockquote:px-8 prose-blockquote:rounded-r-3xl prose-blockquote:not-italic prose-blockquote:text-zinc-300
      prose-code:text-violet-300 prose-code:bg-zinc-900 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:font-mono prose-code:text-sm
      prose-pre:bg-zinc-950 prose-pre:border prose-pre:border-zinc-800 prose-pre:rounded-2xl
      prose-img:rounded-[2rem] prose-img:border prose-img:border-zinc-800
      prose-li:text-zinc-400"
    >
      <MDXRemote
        source={content}
        components={{
          img: ({ src, alt }: MdxImageProps) => {
            if (!src) return null;

            return (
              <span className="block my-12">
                <span className="relative block aspect-video overflow-hidden rounded-[2rem] border border-zinc-800">
                  <Image
                    src={src as string}
                    alt={alt || "Blog image"}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                  />
                </span>
                {alt && (
                  <span className="block text-center text-xs font-mono text-zinc-600 mt-4 uppercase tracking-widest">
                    {alt}
                  </span>
                )}
              </span>
            );
          },
        }}
      />
    </div>
  );
}
