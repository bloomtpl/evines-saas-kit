import { getAllPosts } from "@/lib/blog";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL;

  const posts = getAllPosts().filter((post) => post.published !== false);

  const blogRoutes = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date).toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const staticRoutes = [
    "",
    "/blog",
    "/docs",
    "/docs/getting-started",
    "/docs/database",
    "/docs/auth",
    "/docs/stripe",
    "/docs/deploy",
    "/docs/customization",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  return [...staticRoutes, ...blogRoutes];
}
