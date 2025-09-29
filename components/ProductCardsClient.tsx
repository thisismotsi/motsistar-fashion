"use client";

import React, { useEffect, useRef, useState, ReactNode, Suspense, lazy } from "react";
import { motion } from "framer-motion";
import AffiliateDisclosure from "./AffiliateDisclosure";

// Lazy load ProductCard
const ProductCard = lazy(() => import("./ProductCard"));

interface PostContentLayoutProps {
  children: ReactNode;
  tableOfContents: { id: string; title: string }[];
  disclosure: { company: string; text: string };
}

export default function PostContentLayout({
  children,
  tableOfContents,
  disclosure,
}: PostContentLayoutProps) {
  const [activeId, setActiveId] = useState<string>(tableOfContents[0]?.id || "");
  const sectionsRef = useRef<Record<string, HTMLElement | null>>({});

  // Intersection Observer to highlight TOC
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 }
    );

    Object.values(sectionsRef.current).forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      Object.values(sectionsRef.current).forEach((el) => {
        if (el) observer.unobserve(el!);
      });
    };
  }, [sectionsRef.current]);

  return (
    <div className="container mx-auto px-6 sm:px-12 py-12 grid grid-cols-1 lg:grid-cols-4 gap-8">
      {/* Left sidebar: TOC */}
      <aside className="hidden lg:block lg:col-span-1 sticky top-0 self-start h-fit">
        <h3 className="text-lg font-semibold text-navy mb-4">Table of Contents</h3>
        <motion.ul
          className="space-y-2 max-h-[70vh] overflow-y-auto pr-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {tableOfContents.map((item, idx) => (
            <motion.li
              key={item.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <a
                href={`#${item.id}`}
                className={`text-sm block relative group ${
                  activeId === item.id ? "text-navy font-semibold" : "text-gray-600"
                }`}
              >
                {item.title}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-navy transition-all duration-300 group-hover:w-full"></span>
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </aside>

      {/* Main content */}
      <motion.main
        className="lg:col-span-2 space-y-8"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        {React.Children.map(children, (child: any) => {
          if (!child) return null;
          const id = child.props.id;
          if (id) {
            return React.cloneElement(child, {
              ref: (el: HTMLElement | null) => {
                if (el) sectionsRef.current[id] = el;
              },
            });
          }
          return child;
        })}
      </motion.main>

      {/* Right sidebar: Disclosure */}
      <motion.div
        className="lg:col-span-1 mt-8 lg:mt-0"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <AffiliateDisclosure
          disclosure={{
            text: `We may earn commissions when you purchase through links on our site. ${disclosure.company} partners only with trusted affiliates.`,
            company: disclosure.company,
          }}
          affiliates={[
            {
              name: "Amazon",
              description:
                "As an Amazon Associate, we earn from qualifying purchases made through our links. This helps support our work at no extra cost to you.",
              logo: "/logos/amazon-logo.jpg",
            },
            {
              name: "Awin / ShareASale",
              description:
                "We partner with Awin (formerly ShareASale), trusted global affiliate networks that connect us with reputable merchants offering authentic and valuable products.",
              logo: "/logos/awin-logo.png",
            },
            {
              name: "CJ Affiliate",
              description:
                "Through CJ Affiliate, we collaborate with a wide range of established brands to recommend products and services we believe in and trust.",
              logo: "/logos/cj-logo.svg",
            },
          ]}
        />
      </motion.div>
    </div>
  );
}
