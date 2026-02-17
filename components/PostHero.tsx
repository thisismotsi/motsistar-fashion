"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "./Button";

interface PostHeroProps {
  title: string;
  date: string;
  category: string;
  imageSrc: string;
  excerpt?: string;
  affiliateLink?: string;
}

const PostHero: React.FC<PostHeroProps> = ({ title, date, category, imageSrc, excerpt, affiliateLink }) => {
  return (
    <section className="relative w-full h-80 sm:h-96 lg:h-[28rem] flex items-center justify-center text-center overflow-hidden">
      
      {/* Background Image with subtle dark overlay */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.05, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </motion.div>

      {/* Centered content */}
      <motion.div
        className="relative z-10 max-w-3xl px-6 sm:px-12 text-ivory flex flex-col gap-4 items-center"
        initial="hidden"
        animate="visible"
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.2 } } }}
      >
        {/* Category Tag */}
        <motion.span
          variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
          className="bg-gold/20 px-3 py-1 rounded-full text-sm font-medium text-gold"
        >
          {category}
        </motion.span>

        {/* Hero Heading */}
        <motion.h1
  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
  transition={{ duration: 0.8 }}
  className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold leading-snug text-ivory"
>
  {title}
</motion.h1>

        {/* Optional Excerpt / Subheading */}
        {excerpt && (
          <motion.p
            variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.9 }}
            className="text-sm sm:text-base lg:text-lg text-beige max-w-xl font-light"
          >
            {excerpt}
          </motion.p>
        )}

        {/* Date */}
        <motion.span
          variants={{ hidden: { opacity: 0, y: 5 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.7 }}
          className="text-xs sm:text-sm text-beige/70 font-bold"
        >
          {date}
        </motion.span>
        <motion.span>

        <Button
          href={affiliateLink}
          variant="default"
          size="lg"
          className="rounded-xl px-6 py-3 shadow-md hover:shadow-lg w-full md:w-auto"
          >
          View Products on Amazon
        </Button>
        </motion.span>
      </motion.div>
    </section>
  );
};

export default PostHero;
