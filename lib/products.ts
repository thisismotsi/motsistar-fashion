// lib/products.ts

export type Product = {
  id: string;
  name: string;
  image: string;
  media?: string[];
  price?: string;
  rating?: number;
  merchant: "amazon" | "Preply" | "other";
  url: string;
  badge?: string;
  description?: string;
  promo?: boolean;
};

export const products: Product[] = [
  {
  id: "preply-language-learning",
  name: "Preply Online Tutoring",
  image: "/images/products/preply.webp", // official Preply banner or a stock tutor image
  media: [
    "/images/products/preply-1.png",
    "/images/products/preply-a.png",
    "/images/products/preply-b.png",
    "/images/products/preply-c.png",
  ],
  price: "From $5 per lesson", // Preply has flexible rates
  rating: 4.8,
  merchant: "Preply",
  url: "https://preply.com/en/?pref=MjEzMzgyMDk=&id=1756767730.41754&ep=w1", // replace with your affiliate link
  badge: "Learn Anytime, Anywhere",
  description: "Find expert tutors for languages and subjects tailored to your needs. Flexible scheduling and affordable lessons starting at $5.",
  promo: true
}
];