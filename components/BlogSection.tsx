"use client";

import { useState } from "react";
import BlogCategoryButton from "./BlogCategoryButton";
import BlogCard from "./BlogCard";
import { Button } from "./Button";
import { motion } from "framer-motion";

interface Post {
  title: string;
  date: string;
  excerpt: string;
  imageSrc: string;
  category: string;
  slug: string;
}

interface BlogSectionProps {
  categories: string[];
  samplePosts: Post[];
}

const BlogSection: React.FC<BlogSectionProps> = ({ categories, samplePosts }) => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts =
    activeCategory === "All"
      ? samplePosts
      : samplePosts.filter((post) => post.category === activeCategory);

  const displayedPosts = filteredPosts

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <section className="py-12 sm:py-16 bg-ivory">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 flex flex-col gap-6">
        {/* Categories Nav */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-4">
            {categories.map((cat) => (
              <motion.div
                key={cat}
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <BlogCategoryButton
                  category={cat}
                  active={activeCategory === cat}
                  onClick={() => setActiveCategory(cat)}
                />
              </motion.div>
            ))}
          </div>

          {/* View All Blogs Button */}
          <Button href="/blog">View All Blogs</Button>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-6">
          {displayedPosts.map((post, idx) => (
            <motion.div
              key={post.slug}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
            >
              <BlogCard
                title={post.title}
                date={post.date}
                excerpt={post.excerpt}
                imageSrc={post.imageSrc}
                href={`/blog/${post.slug}`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
