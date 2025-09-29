import React from "react";
import BlogSection from "@/components/BlogSection";
import PostLayout from "@/components/PostLayout";
import { allPosts } from "../posts";
import type { Metadata } from "next";

// Metadata for SEO
export const metadata: Metadata = {
  title: "MOTSISTAR Blog - Discover amazing products and services & Business Solutions",
  description: "Discover amazing products and services & Business Solutions. Explore our latest posts, product reviews, and tips.",
  openGraph: {
    title: "MOTSISTAR Blog - Discover amazing products and services & Business Solutions",
    description: "Discover amazing products and services & Business Solutions. Explore our latest posts, product reviews, and tips.",
    url: process.env.SITE_URL ? `${process.env.SITE_URL}/blog` : "https://example.com/blog",
    type: "website",
    images: [{ url: "/og-home.png", width: 1200, height: 630, alt: "MOTSISTAR Blog" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MOTSISTAR Blog - Discover amazing products and services & Business Solutions",
    description: "Discover amazing products and services & Business Solutions. Explore our latest posts, product reviews, and tips.",
    images: ["/og-home.png"],
  },
};

// Fetch all posts
async function fetchAllPosts() {
  return [...allPosts];
}

// Get unique categories from posts
function getCategories(posts: typeof allPosts) {
  const unique = Array.from(new Set(posts.map((p) => p.category)));
  return ["All", ...unique];
}

export default async function BlogPage() {
  const posts = await fetchAllPosts();
  const categories = getCategories(posts);

  return (
    <PostLayout>
      <section className="w-full bg-ivory py-12 sm:py-16 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-heading font-bold text-navy text-center mb-8">
          MOTSISTAR Blog
        </h1>
        <p className="text-center text-gray-700 mb-4">
          Discover in-depth product reviews, business insights, and curated recommendations from MOTSISTAR. Stay informed, make smarter decisions, and protect your online transactions.
        </p>

        <BlogSection categories={categories} samplePosts={posts} />
      </section>
    </PostLayout>
  );
}
