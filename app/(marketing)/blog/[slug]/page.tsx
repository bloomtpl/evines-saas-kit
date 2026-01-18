import { PostContent, PostFooter, PostHeader } from "@/components/blog/post";
import { BlogPost } from "@/types";
import fs from "fs";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import path from "path";

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), "content/blog", `${slug}.mdx`);

  if (!fs.existsSync(filePath)) notFound();

  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContent);

  const post = { ...data, slug, content } as BlogPost;

  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-24 px-6 font-sans">
      <article className="max-w-4xl mx-auto">
        <PostHeader post={post} />

        <PostContent content={content} />

        <PostFooter />
      </article>
    </div>
  );
}
