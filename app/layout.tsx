// app/layout.tsx
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["100","200","300","400","500","600","700"],
  display: "swap",
});

// Default site-wide metadata
export const metadata = {
  title: "MOTSISTAR - Discover amazing products and services & Business Solutions",
  description:
    "MOTSISTAR delivers authentic product reviews, curated recommendations, and safe online shopping guidance for businesses and consumers.",
  metadataBase: new URL(process.env.SITE_URL || "https://example.com"),
  openGraph: {
    title: "MOTSISTAR - Discover amazing products and services & Business Solutions",
    description:
      "MOTSISTAR delivers authentic product reviews, curated recommendations, and safe online shopping guidance for businesses and consumers.",
    url: process.env.SITE_URL || "https://example.com",
    type: "website",
    images: [{ url: "/og-home.png", width: 1200, height: 630, alt: "MOTSISTAR" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MOTSISTAR - Discover amazing products and services & Business Solutions",
    description:
      "MOTSISTAR delivers authentic product reviews, curated recommendations, and safe online shopping guidance for businesses and consumers.",
    images: ["/og-home.png"],
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <Head>
        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />

        {/* Preconnect / Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "MOTSISTAR",
              url: process.env.SITE_URL || "https://example.com",
              logo: process.env.SITE_URL + "/logo.png",
              sameAs: [
                "https://www.facebook.com/yourpage",
                "https://twitter.com/yourprofile",
                "https://www.linkedin.com/company/yourcompany",
              ],
            }),
          }}
        />
      </Head>

      <body className="font-sans bg-ivory text-charcoal min-h-screen">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics/>
      </body>
    </html>
  );
}
