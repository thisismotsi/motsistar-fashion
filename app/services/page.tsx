// app/services/page.tsx
import ServicesPageClient from "./ServicesPageClient";

export const metadata = {
  title: "MOTSISTAR Services",
  description:
    "Explore MOTSISTAR’s premium business solutions including sourcing, procurement, market intelligence, and strategic marketing.",
  openGraph: {
    title: "MOTSISTAR Services",
    description:
      "Tailored business solutions to drive growth and protect your transactions.",
    url: process.env.SITE_URL ? `${process.env.SITE_URL}/services` : "https://example.com/services",
    type: "website",
    images: [{ url: "/og-services.png", width: 1200, height: 630, alt: "MOTSISTAR Services" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MOTSISTAR Services",
    description:
      "Tailored business solutions to drive growth and protect your transactions.",
    images: ["/og-services.png"],
  },
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
