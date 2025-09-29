// app/sitemap.ts
import { allPosts } from "@/app/posts";

export default function sitemap() {
  const siteUrl = process.env.SITE_URL || "https://example.com";

  const posts = allPosts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: post.date,
  }));

  return [
    { url: siteUrl, lastModified: new Date().toISOString() },
    { url: `${siteUrl}/blog`, lastModified: new Date().toISOString() },
    ...posts,
  ];
}
