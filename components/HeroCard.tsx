"use client";

import Image from "next/image";

interface HeroCardProps {
  title: string;
  description: string;
  imageSrc?: string;
}

const HeroCard: React.FC<HeroCardProps> = ({ title, description, imageSrc }) => {
  return (
    <div className="bg-beige rounded-2xl shadow-glow p-4 flex flex-col items-center text-center">
      {imageSrc && (
        <Image
          src={imageSrc}
          alt={title}
          width={80}       // fixed width
          height={80}      // fixed height
          className="object-cover rounded-full mb-4"
        />
      )}
      <h3 className="font-heading font-bold text-lg mb-2">{title}</h3>
      <p className="text-charcoal text-sm">{description}</p>
    </div>
  );
};

export default HeroCard;
