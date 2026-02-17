import PostLayout from "@/components/PostLayout";
import PostHero from "@/components/PostHero";
import PostContentLayout from "@/components/PostContentLayout";
import ProductCard from "@/components/ProductCard";
import BlogSection from "@/components/BlogSection";
import { allPosts } from "@/app/posts";
import type { Metadata } from "next";
import React from "react";
import Head from "next/head";
import SerpApi from "google-search-results-nodejs";
import { Post } from "../../../types/post";
import { Button } from "@/components/Button";

interface BlogPageProps {
  params: Promise<{ slug: string }>;
}

function fetchPost(slug: string): Post | null {
  return allPosts.find((p) => p.slug === slug) as Post | null;
}

function parseAndRoundPrice(raw: string | undefined): number | null {
  if (!raw) return null;
  const matched = raw.match(/[\d,.]+/);
  if (!matched) return null;
  const normalized = matched[0].replace(/,/g, "");
  const asNumber = Number(normalized);
  return Number.isFinite(asNumber) ? Math.round(asNumber) : null;
}

export async function generateStaticParams() {
  return allPosts.map((p) => ({ slug: p.slug }));
}

async function fetchSerpData(query: string) {
  if (!process.env.SERPAPI_KEY) return { keywords: [], faqs: [] };

  const client = new SerpApi.GoogleSearch(process.env.SERPAPI_KEY);
  return new Promise<{ keywords: string[]; faqs: { q: string; a: string }[] }>((resolve) => {
    client.json({ q: query, engine: "google", num: 10 }, (data: any) => {
      const keywords: string[] = [];
      const faqs: { q: string; a: string }[] = [];

      if (data.related_searches) {
        data.related_searches.forEach((k: any) => {
          if (k.query) keywords.push(k.query);
        });
      }

      if (data.related_questions) {
        data.related_questions.forEach((q: any) => {
          faqs.push({ q: q.question, a: q.answer || "" });
        });
      }

      resolve({ keywords, faqs });
    });
  });
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = fetchPost(slug);
  const siteUrl = process.env.SITE_URL || "https://example.com";

  if (!post) {
    return {
      title: "Post Not Found | MOTSISTAR",
      description: "The requested post could not be found.",
    };
  }

  const serpData = await fetchSerpData(post.title);

  const keywords = [
    post.category,
    ...post.products.map((p) => p.name),
    "MOTSISTAR",
    "product review",
    "affiliate review",
    "best " + post.category.toLowerCase(),
    ...serpData.keywords,
  ];

  return {
    title: `${post.title} | MOTSISTAR`,
    description: post.excerpt,
    keywords,
    metadataBase: new URL(siteUrl),
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${siteUrl}/blog/${post.slug}`,
      type: "article",
      images: [
        {
          url: post.imageSrc,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.imageSrc],
    },
    alternates: {
      canonical: `${siteUrl}/blog/${post.slug}`,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-snippet": -1,
        "max-image-preview": "large",
        "max-video-preview": -1,
      },
    },
  };
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = fetchPost(slug);
  const siteUrl = process.env.SITE_URL || "https://example.com";

  if (!post) {
    return (
      <PostLayout>
        <div className="p-12 text-center text-gray-600">
          <h1 className="text-3xl font-heading font-light mb-3">Post Not Found</h1>
          <p className="text-gray-500">Please check the URL or go back to the homepage.</p>
        </div>
      </PostLayout>
    );
  }

  const tableOfContents = [
    { id: "introduction", title: "Introduction" },
    ...post.products.map((product, idx) => ({
      id: `product-${idx + 1}`,
      title: `${idx + 1}. ${product.name}`,
    })),
    ...(post.tips ? [{ id: "tips", title: "Tips" }] : []),
    ...(post.conclusion ? [{ id: "conclusion", title: "Conclusion" }] : []),
    ...(post.faqs ? [{ id: "faqs", title: "FAQ" }] : []),
  ];

  const canonical = `${siteUrl}/blog/${post.slug}`;

  const schemas: any[] = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      image: [new URL(post.imageSrc, siteUrl).toString()],
      author: { "@type": "Organization", name: "MOTSISTAR" },
      publisher: {
        "@type": "Organization",
        name: "MOTSISTAR",
        logo: { "@type": "ImageObject", url: `${siteUrl}/logo.png` },
      },
      mainEntityOfPage: canonical,
      datePublished: post.date,
    },
    ...post.products.map((p) => {
      const priceSpec = p.specs.find((s) => /price/i.test(s.label));
      const price = parseAndRoundPrice(priceSpec?.value);
      return {
        "@type": "Product",
        name: p.name,
        description: p.description.map((pObj: any) => Object.values(pObj)[0]).join("\n"),
        image: [new URL(p.imageSrc, siteUrl).toString()],
        url: canonical + `#${p.id}`,
        ...(price
          ? {
              offers: {
                "@type": "Offer",
                url: p.affiliateLink,
                price: String(price),
                priceCurrency: "USD",
                availability: "https://schema.org/InStock",
              },
            }
          : {}),
      };
    }),
    ...(post.faqs || []).length
      ? [
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [...(post.faqs || []), ...((post as any).serpFaqs || [])].map((f: any) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          },
        ]
      : [],
  ];

  return (
    <PostLayout>
      <Head>
        <link rel="canonical" href={canonical} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }} />
      </Head>

      <PostHero
        title={post.title}
        date={post.date}
        category={post.category}
        imageSrc={post.imageSrc}
        excerpt={post.excerpt}
        affiliateLink={post.products[0]?.affiliateLink}
      />

      <PostContentLayout tableOfContents={tableOfContents} disclosure={post.disclosure}>
        {/* Introduction */}
        <section id="introduction" className="mb-12">
          <h2 className="text-2xl md:text-3xl font-heading font-light text-navy mb-5">Introduction</h2>
          {post.introduction.map((paraObject: any, idx) => (
            <p key={idx} className="text-gray-700 font-normal leading-relaxed mb-4">
              {Object.values(paraObject)[0] as string}
            </p>
          ))}
        </section>

        {/* Products */}
        {post.products.map((product, idx) => (
          <ProductCard key={product.id} number={idx + 1} {...product} />
        ))}

        {/* Tips */}
        {post.tips && (
          <section id="tips" className="mb-12">
            <h2 className="text-2xl md:text-3xl font-heading font-normal text-navy mb-5">Tips</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 font-light leading-relaxed">
              {post.tips.map((tip, idx) => (
                <li key={idx}>{tip}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Conclusion */}
        {post.conclusion && (
          <section id="conclusion" className="mb-12">
            <h2 className="text-2xl md:text-3xl font-heading font-light text-navy mb-5">Conclusion</h2>
            {post.conclusion.map((paraObject: any, idx) => (
              <p key={idx} className="text-gray-700 font-normal leading-relaxed mb-4">
                {Object.values(paraObject)[0] as string}
              </p>
            ))}
          </section>
        )}

        {/* FAQs */}
        {post.faqs && (
          <section id="faqs" className="mb-12">
            <h2 className="text-2xl md:text-3xl font-heading font-light text-navy mb-5">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {[...(post.faqs || []), ...((post as any).serpFaqs || [])].map((faq, idx) => (
                <div key={idx} className="p-4 bg-gray-50 rounded-xl border border-gray-200 shadow-sm">
                  <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                  <p className="text-gray-700 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>
        )}
          <div className="flex justify-center">
        <Button
          href={post.products[0]?.affiliateLink}
          variant="default"
          size="lg"
          className="rounded-xl px-6 py-3 shadow-md hover:shadow-lg w-full md:w-auto"
        >
          View Products on Amazon
        </Button>
      </div>
      </PostContentLayout>

      <BlogSection categories={["All"]} samplePosts={allPosts.slice(0, 3)} />
    </PostLayout>
  );
}
