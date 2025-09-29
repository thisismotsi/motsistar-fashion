"use client";

import Image from "next/image";
import { Button } from "@/components/Button";
import { Briefcase, ShoppingCart, BarChart, Megaphone, Target } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  { name: "Product & Service Sourcing", description: "We specialize in sourcing premium products and world-class services, connecting your business with trusted global suppliers who align with your brand’s vision and standards.", icon: ShoppingCart },
  { name: "Procurement", description: "From contract negotiations to meticulous quality assurance, our procurement process ensures seamless transactions with transparency and efficiency.", icon: Briefcase },
  { name: "Market Intelligence", description: "Our analysts deliver data-driven insights, consumer trends, and competitor benchmarks that empower your business to stay ahead in rapidly evolving markets.", icon: BarChart },
  { name: "Strategic Marketing", description: "We craft tailored marketing strategies that elevate brand authority, engage the right audience, and maximize return on investment.", icon: Megaphone },
  { name: "Advertising Solutions", description: "Our advertising services span digital, affiliate, and performance-based campaigns designed to deliver measurable growth and lasting impact.", icon: Target },
  { name: "Global Supply Chain Management", description: "We optimize your international operations, ensuring compliance, customs clearance, and logistics efficiency across markets worldwide.", icon: Briefcase },
  { name: "Sustainable Procurement", description: "Partner with us to source ethically and sustainably, meeting ESG goals while maintaining exceptional product standards.", icon: ShoppingCart },
  { name: "AI-Powered Insights", description: "Leverage advanced analytics and artificial intelligence to forecast demand, predict trends, and drive smarter business decisions.", icon: BarChart },
  { name: "Luxury Brand Positioning", description: "Our team crafts bespoke campaigns that resonate with elite audiences, positioning your brand as a trusted leader in the premium market.", icon: Megaphone },
  { name: "E-Commerce Enablement", description: "From storefront creation to conversion optimization, we help brands establish and scale their digital presence on platforms like Shopify, Amazon, and direct-to-consumer channels.", icon: ShoppingCart },
  { name: "Affiliate Program Management", description: "We design, launch, and manage affiliate ecosystems that expand reach, build partnerships, and accelerate growth for your business.", icon: Target },
  { name: "Strategic Partnerships", description: "Through carefully curated networks, we connect you with affiliates, influencers, and global partners that align with your brand’s vision.", icon: Briefcase },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

const ServicesPage: React.FC = () => {
  return (
    <section className="w-full bg-ivory">

      {/* Hero */}
      <motion.div
        className="relative w-full h-80 sm:h-96 lg:h-[32rem]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/images/services/services-hero.jpg"
          alt="MOTSISTAR Services"
          fill
          className="object-cover"
        />
        <motion.div
          className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center px-6"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-bold text-white mb-4">
            Tailored Services for Businesses
          </h1>
          <p className="text-beige max-w-3xl text-base sm:text-lg">
            At MOTSISTAR, we partner with global leaders to provide sourcing, procurement, 
            and marketing solutions built on trust, innovation, and measurable results.
          </p>
        </motion.div>
      </motion.div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-16">
        <h2 className="text-2xl sm:text-3xl font-heading font-bold text-center text-navy mb-12">
          Our Core Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-2xl hover:translate-y-[-4px] transition-all"
            >
              <service.icon className="h-14 w-14 text-gold mb-5" />
              <h3 className="text-xl font-semibold text-navy mb-3">{service.name}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <motion.div
        className="bg-navy text-ivory py-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 text-center max-w-4xl">
          <h2 className="text-2xl sm:text-4xl font-heading font-bold mb-6">
            Why Partner with MOTSISTAR?
          </h2>
          <p className="text-beige mb-8 text-lg leading-relaxed">
            In a global market where billions are lost to scams and unreliable partnerships, 
            MOTSISTAR stands as a trusted ally. We safeguard your business transactions 
            with organic, ethical methods while delivering access to world-class products 
            and services that drive growth and prestige.
          </p>
          <Button variant="secondary" size="lg" href="/contact">
            Schedule a Consultation
          </Button>
        </div>
      </motion.div>
    </section>
  );
};

export default ServicesPage;
