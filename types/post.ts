// Assuming your actual Post type (based on bestFoldables2025.ts) is:
interface TextParagraph {
  [key: string]: string;
}

interface FAQ {
  q: string;
  a: string;
}

export interface Product {
  id: string;
  name: string;
  description: TextParagraph[],
  specs: { label: string; value: string }[];
  affiliateLink: string;
  imageSrc: string;
}

export interface Post {
  title: string;
  date: string;
  excerpt: string;
  category: string;
  slug: string;
  imageSrc: string;
  introduction: TextParagraph[];
  disclosure: { company: string; text: string };
  products: Product[];
  tips?: string[];
  faqs?: FAQ[];
  conclusion?: TextParagraph[];
}
