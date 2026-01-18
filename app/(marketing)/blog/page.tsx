import {
  BlogHeader,
  FeaturedPost,
  NewsletterBox,
  PostCard,
} from "@/components/blog";
import { getAllPosts } from "@/lib/blog";

export default function BlogPage() {
  const allPosts = getAllPosts();
  const featuredPost = allPosts[0];
  const secondaryPosts = allPosts.slice(1);

  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <BlogHeader />

        {featuredPost && <FeaturedPost post={featuredPost} />}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {secondaryPosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>

        <NewsletterBox />
      </div>
    </div>
  );
}
