// app/about/page.tsx
import AboutPageClient from "./AboutPageClient";

export const metadata = {
  title: "About MOTSISTAR",
  description:
    "MOTSISTAR protects your online shopping experience with authentic reviews, transparent recommendations, and premium business solutions.",
  openGraph: {
    title: "About MOTSISTAR",
    description:
      "Protecting your online shopping experience with authentic reviews and curated recommendations.",
    url: process.env.SITE_URL ? `${process.env.SITE_URL}/about` : "https://example.com/about",
    type: "website",
    images: [{ url: "/og-about.png", width: 1200, height: 630, alt: "About MOTSISTAR" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About MOTSISTAR",
    description:
      "Protecting your online shopping experience with authentic reviews and curated recommendations.",
    images: ["/og-about.png"],
  },
};

export default function AboutPage() {
  return <AboutPageClient />;
}
