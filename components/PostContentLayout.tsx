"use client";

import { ReactNode, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiInfo, FiX } from "react-icons/fi";
import AffiliateDisclosure from "./AffiliateDisclosure";

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
  const [showTOC, setShowTOC] = useState(false);
  const [showDisclosure, setShowDisclosure] = useState(false);

  return (
    <div className="relative">
      {/* Sticky mobile top bar */}
      <div className="sticky top-0 z-40 bg-white border-b border-gray-200 flex justify-between items-center px-4 py-2 lg:hidden">
        <button
          className="flex items-center space-x-2 text-navy font-medium"
          onClick={() => setShowTOC(true)}
        >
          <FiMenu size={20} />
          <span>Contents</span>
        </button>
        <button
          className="flex items-center space-x-2 text-navy font-medium"
          onClick={() => setShowDisclosure(true)}
        >
          <FiInfo size={20} />
          <span>Disclosure</span>
        </button>
      </div>

      {/* Main grid layout */}
      <div className="container mx-auto px-6 sm:px-12 py-12 grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* TOC (desktop sidebar) */}
        <aside className="hidden lg:block lg:col-span-1 sticky top-20 self-start h-fit">
          <h3 className="text-lg font-semibold text-navy mb-4">Table of Contents</h3>
          <ul className="space-y-2 max-h-[70vh] overflow-y-auto pr-2">
            {tableOfContents.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="text-gray-600 hover:text-navy text-sm block relative group"
                >
                  {item.title}
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-navy transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
        </aside>

        {/* Main blog content */}
        <main className="lg:col-span-2">{children}</main>

        {/* Disclosure (desktop sidebar) */}
        <div className="hidden lg:block lg:col-span-1">
          <AffiliateDisclosure
            disclosure={{
              text: disclosure.text,
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
        </div>
      </div>

      {/* Mobile TOC overlay */}
      <AnimatePresence>
        {showTOC && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/40 flex"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowTOC(false)}
          >
            <motion.div
              className="bg-white w-72 h-full shadow-xl p-6 overflow-y-auto"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-navy">Table of Contents</h3>
                <button onClick={() => setShowTOC(false)}>
                  <FiX size={20} />
                </button>
              </div>
              <ul className="space-y-2">
                {tableOfContents.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="text-gray-600 hover:text-navy text-sm block"
                      onClick={() => setShowTOC(false)}
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Affiliate Disclosure overlay (RIGHT panel) */}
<AnimatePresence>
  {showDisclosure && (
    <motion.div
      className="fixed inset-0 z-50 bg-black/40 flex justify-end"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setShowDisclosure(false)}
    >
      <motion.div
        className="bg-white w-80 max-w-full h-full shadow-xl p-6 overflow-y-auto"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-navy">Affiliate Disclosure</h3>
          <button onClick={() => setShowDisclosure(false)}>
            <FiX size={20} />
          </button>
        </div>

        {/* Correctly pass both props */}
        <AffiliateDisclosure
          disclosure={{
            text: disclosure.text,
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
    </motion.div>
  )}
</AnimatePresence>
    </div>
  );
}
