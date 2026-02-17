"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/Button";
import { motion } from "framer-motion";

interface ProductCardProps {
  number: number;
  name: string;
  description: Record<string, string>[]; // multiple paragraphs
  imageSrc?: string;
  specs: { label: string; value: string }[];
  affiliateLink: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  number,
  name,
  description,
  imageSrc,
  specs,
  affiliateLink,
}) => {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      id={`product-${number}`}
      className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 mb-12 hover:shadow-xl transition-shadow duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: number * 0.05 }}
    >
      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-navy mb-5">
        {number}. {name}
      </h2>

      {/* Product Image */}
      {imageSrc && !imageError && (
        <motion.div
          className="w-full flex justify-center mb-6 overflow-hidden rounded-2xl shadow-md"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={imageSrc}
            alt={name}
            width={700}
            height={450}
            className="rounded-2xl object-cover max-h-[420px] w-auto"
            onError={() => setImageError(true)}
          />
        </motion.div>
      )}

      {/* Description */}
      <div className="space-y-4 mb-6">
        {description.map((para, idx) => (
          <p
            key={idx}
            className="text-gray-700 leading-relaxed font-normal"
          >
            {Object.values(para)[0]}
          </p>
        ))}
      </div>

      {/* Specs */}
      {specs.length > 0 && (
        <ul className="list-disc list-inside space-y-1 mb-8 text-gray-600 text-sm md:text-base">
          {specs.map((item, idx) => (
            <li key={idx}>
              <span className="font-medium text-gray-800">{item.label}:</span>{" "}
              {item.value}
            </li>
          ))}
        </ul>
      )}

      {/* CTA Button */}
      <div className="flex justify-center">
        <Button
          href={affiliateLink}
          variant="default"
          size="lg"
          className="rounded-xl px-6 py-3 shadow-md hover:shadow-lg w-full md:w-auto"
        >
          View Products on Amazon
        </Button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
