// app/about/AboutPageClient.tsx
"use client";

import { ShieldCheck } from "lucide-react";
import Image from "next/image";
import { ReactNode } from "react";
import { motion } from "framer-motion";
import Head from "next/head";

// Reusable InfoCard
const InfoCard: React.FC<{ icon: ReactNode; title: string; description: string }> = ({
  icon,
  title,
  description,
}) => (
  <motion.div
    className="flex flex-col items-center text-center p-6 bg-beige rounded-2xl shadow-glow hover:shadow-lg transition"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6 }}
  >
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="font-heading font-bold text-lg mb-2">{title}</h3>
    <p className="text-gray-700">{description}</p>
  </motion.div>
);

export default function AboutPageClient() {
  return (
    <div className="w-full bg-ivory">
      {/* Optional extra client-only metadata */}
      <Head>
        <link rel="canonical" href={process.env.SITE_URL ? `${process.env.SITE_URL}/about` : "https://example.com/about"} />
      </Head>

      {/* Hero Section */}
      <section className="relative w-full h-96 sm:h-[32rem] flex items-center justify-center">
        <Image
          src="/images/about/about-hero.jpg"
          alt="ABOUT MOTSISTAR Hero"
          fill
          className="object-cover"
          priority
        />
        <motion.div
          className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center px-4 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="text-4xl sm:text-5xl font-bold text-ivory mb-4"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            ABOUT MOTSISTAR
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl text-beige max-w-2xl"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Protecting your online shopping experience with authentic reviews, transparent recommendations, and uncompromising integrity.
          </motion.p>
        </motion.div>
      </section>

      {/* Our Values */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-12 max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl sm:text-4xl font-heading font-bold text-navy text-center mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Core Values
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <InfoCard
            icon="🤝"
            title="Integrity"
            description="We uphold the highest ethical standards, ensuring every review and recommendation is honest, fair, and reliable."
          />
          <InfoCard
            icon="💎"
            title="Excellence"
            description="Our commitment is to highlight only premium, high-quality products that deliver true value."
          />
          <InfoCard
            icon="🔍"
            title="Transparency"
            description="From clear affiliate disclosures to unbiased content, trust is at the foundation of everything we publish."
          />
        </div>
      </section>

      {/* What We Do */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-12 max-w-6xl mx-auto bg-gray-50 rounded-2xl">
        <motion.h2
          className="text-3xl sm:text-4xl font-heading font-bold text-navy text-center mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          What We Do
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <InfoCard
            icon={<ShieldCheck className="w-10 h-10" />}
            title="Safe Transactions"
            description="We guide you to verified sources, protecting you from scams and fraud."
          />
          <InfoCard
            icon="📝"
            title="Authentic Reviews"
            description="We conduct in-depth evaluations, going beyond surface impressions to verify real-world performance."
          />
          <InfoCard
            icon="🛒"
            title="Curated Recommendations"
            description="Every product we suggest has been carefully vetted to protect you from scams and disappointments."
          />
          <InfoCard
            icon="📈"
            title="Guides & Insights"
            description="We equip our readers with knowledge—helping businesses and individuals make smarter purchasing decisions."
          />
        </div>
      </section>

      {/* Our Story */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-12 max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-8">
        <motion.div
          className="lg:w-1/2"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-navy mb-4">
            Our Story
          </h2>
          <p className="text-gray-700 mb-4">
            Every day, millions of people fall victim to online scams, while billions of dollars are wasted on products that fail to meet expectations.
          </p>
          <p className="text-gray-700 mb-4">
            MOTSISTAR was founded to create a safer path. Our mission is to ensure that shoppers, entrepreneurs, and businesses alike have access to authentic, trustworthy product insights.
          </p>
          <p className="text-gray-700 mb-4">
            Beyond reviews, we safeguard online transactions—building confidence and protecting your digital journey.
          </p>
          <p className="text-gray-700">
            Our commitment is simple: empower people with clarity, prevent online disappointments, and build an ecosystem where authenticity thrives.
          </p>
        </motion.div>

        <motion.div
          className="w-full lg:w-1/2 relative min-h-[16rem] sm:min-h-[20rem] md:min-h-[24rem] rounded-2xl overflow-hidden shadow-lg"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/images/about/our-story.jpg"
            alt="Our Story"
            fill
            className="object-cover"
          />
        </motion.div>
      </section>

      {/* Affiliate Disclosure */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-12 max-w-4xl mx-auto">
        <motion.h2
          className="text-2xl font-semibold text-navy mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Affiliate Disclosure
        </motion.h2>
        <motion.blockquote
          className="border-l-4 border-gold pl-4 italic text-gray-700"
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          &quot;MOTSISTAR participates in affiliate programs. We may earn a commission if you purchase through our links—at no extra cost to you.&quot;
        </motion.blockquote>
      </section>
    </div>
  );
}
