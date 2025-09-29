// app/contact/page.tsx
import ContactPageClient from "./ContactPageClient";

export const metadata = {
  title: "Contact MOTSISTAR",
  description:
    "Get in touch with MOTSISTAR for custom business solutions, affiliate partnerships, and trusted product guidance.",
  openGraph: {
    title: "Contact MOTSISTAR",
    description:
      "Discover amazing products and services & Business Solutions",
    url: process.env.SITE_URL ? `${process.env.SITE_URL}/contact` : "https://example.com/contact",
    type: "website",
    images: [{ url: "/og-contact.png", width: 1200, height: 630, alt: "Contact MOTSISTAR" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact MOTSISTAR",
    description:
      "MOTSISTAR - Discover amazing products and services & Business Solutions",
    images: ["/og-contact.png"],
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
