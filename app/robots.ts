import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/docs/", "/blog/"],
      disallow: [
        "/api/",
        "/actions/",
        "/generated/",
        "/dashboard/",
        "/signin",
        "/verify-request",
        "/success",
      ],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
