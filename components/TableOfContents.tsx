"use client";

import Link from "next/link";
import { Product } from "@/types/post";

interface TableOfContentsProps {
  products: Product[];
}

export default function TableOfContents({ products }: TableOfContentsProps) {
  return (
    <nav className="sticky top-24 bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
      <h3 className="font-bold text-lg mb-4">Table of Contents</h3>
      <ul className="space-y-2">
        {products.map((p, i) => (
          <li key={p.id}>
            <Link
              href={`#${p.id}`}
              className="text-sm text-blue-600 hover:underline"
            >
              {i + 1}. {p.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
