"use client";

import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
  title: string;
  date: string;
  excerpt: string;
  imageSrc: string;
  href?: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, date, excerpt, imageSrc, href }) => {
  return (
    <Link
      href={href || "#"}
      className="flex flex-col bg-navy rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
    >
      <div className="relative w-full h-48 sm:h-56 md:h-64">
        <Image src={imageSrc} alt={title} fill className="object-cover" />
      </div>
      <div className="p-4 sm:p-6 flex flex-col gap-2">
        <span className="text-xs text-gray-500">{date}</span>
        <h3 className="text-lg sm:text-xl font-heading font-bold">{title}</h3>
        <p className="text-sm sm:text-base text-charcoal">{excerpt}</p>
      </div>
    </Link>
  );
};

export default BlogCard;
