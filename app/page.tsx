// app/page.tsx
import Hero from "@/components/Hero";
import BlogSection from "@/components/BlogSection";
import { allPosts } from "./posts";
import Head from "next/head";

function getCategories(posts: typeof allPosts) {
  return ["All", ...Array.from(new Set(posts.map((p) => p.category)))];
}

export const metadata = {
  title: "MOTSISTAR - Discover amazing products and services & Business Solutions",
  description:
    "MOTSISTAR provides trusted product reviews, curated recommendations, and safe online shopping guidance for businesses and consumers.",
  openGraph: {
    title: "MOTSISTAR - Discover amazing products and services & Business Solutions",
    description:
      "MOTSISTAR provides trusted product reviews, curated recommendations, and safe online shopping guidance for businesses and consumers.",
    type: "website",
    url: process.env.SITE_URL || "https://example.com",
    images: [{ url: "/og-home.png", width: 1200, height: 630, alt: "MOTSISTAR" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MOTSISTAR - Discover amazing products and services & Business Solutions",
    description:
      "MOTSISTAR provides trusted product reviews, curated recommendations, and safe online shopping guidance for businesses and consumers.",
    images: ["/og-home.png"],
  },
};

export default async function Home() {
  const posts = allPosts;
  const categories = getCategories(posts);

  return (
    <>
      <Head>
        <meta name="keywords" content="Affiliate Reviews, Product Recommendations, Safe Online Shopping, MOTSISTAR, Scam-Free Shopping, Business Solutions" />
      </Head>
      <Hero />
      <BlogSection categories={categories} samplePosts={posts} />
    </>
  );
}