"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/Button";
import Image from "next/image";

interface AffiliateDisclosureProps {
  disclosure: { text: string; company: string };
  affiliates: { name: string; description: string; logo?: string }[];
}

const AffiliateDisclosure: React.FC<AffiliateDisclosureProps> = ({ disclosure, affiliates }) => {
  const [open, setOpen] = useState(false);

  return (
    <aside className="lg:block lg:col-span-1 sticky top-0 self-start h-fit">
      {/* Disclosure Box */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-sm text-gray-600">
        <strong>Affiliate Disclosure:</strong>{" "}
        {disclosure.text.replace("{company}", disclosure.company)}
        <div className="mt-3">
          <Button variant="primary" size="sm" onClick={() => setOpen(true)}>
            View Our Affiliates
          </Button>
        </div>
      </div>

      {/* Animated Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl shadow-xl max-w-lg w-full p-6 relative"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              {/* Close button */}
              <button
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
                onClick={() => setOpen(false)}
              >
                ✕
              </button>

              <h3 className="text-xl font-bold text-navy mb-4">Our Affiliates</h3>
              <ul className="space-y-4">
                {affiliates.map((affiliate, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    {affiliate.logo && (
                      <Image
                        src={affiliate.logo}
                        alt={affiliate.name}
                          width={40}
                        height={40}
                        className="w-10 h-10 rounded-lg object-contain border"
                      />
                    )}
                    <div>
                      <p className="font-semibold">{affiliate.name}</p>
                      <p className="text-gray-600 text-sm">{affiliate.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </aside>
  );
};

export default AffiliateDisclosure;
